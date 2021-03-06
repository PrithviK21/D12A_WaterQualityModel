import django
from django.shortcuts import render, redirect
from django.views.generic import View
from django.http import FileResponse
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
import pandas as pd
import numpy as np
import json
import joblib


class HomeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/index.html')


####################################################

# if you don't want to user rest_framework

# def get_data(request, *args, **kwargs):
#
# data ={
#             "sales" : 100,
#             "person": 10000,
#     }
#
# return JsonResponse(data) # http response


#######################################################

# using rest_framework classes


class ChartData(APIView):
    authentication_classes = []
    permission_classes = []

    df = pd.read_excel("chartjs/wqilimitriver_morethanequalto5.xlsx")

    def get(self, request, format=None):
        rivername = request.GET.get('rivername')
        print(rivername)
        wqi = np.array(self.df[self.df['RIVER'] == rivername]['WQI'])
        year = np.array(self.df[self.df['RIVER'] == rivername]['YEAR'])
        print(self.df[self.df['RIVER'] == rivername])
        trace1 = {
            'type': 'line',
            'x': year,
            'y': wqi,
            'name': rivername,
        }
        data = trace1
        return Response(data)


class CountWQIData(APIView):
    authentication_classes = []
    permission_classes = []

    df = pd.read_excel("chartjs/wqilimitriver_morethanequalto5.xlsx")

    def get(self, request, format=None):
        # statename = request.GET.get('statename')
        # print(statename)
        # dfstate = pd.read_excel("chartjs/templates/chartjs/wqilimitstate.xlsx")
        # dfx = dfstate[dfstate['STATE'] == statename]
        # print(dfx[['STATE', 'YEAR', 'WQI']])
        # wqirange = []
        # wqirange.append(len(dfx[dfx['WQI'] <= 25]) + len(dfx[0 < dfx['WQI']]))
        # wqirange.append(len(dfx[dfx['WQI'] <= 50]) + len(dfx[25 < dfx['WQI']]))
        # wqirange.append(len(dfx[dfx['WQI'] <= 70]) + len(dfx[50 < dfx['WQI']]))
        # wqirange.append(len(dfx[dfx['WQI'] <= 90]) + len(dfx[70 < dfx['WQI']]))
        # wqirange.append(len(dfx[dfx['WQI'] <= 100]) + len(dfx[90 < dfx['WQI']]))
        # print(wqirange)
        # trace1 = {
        #     'type': 'bar',
        #     'x': ['0-25', '25-50', '50-70', '70-90', '90-100'],
        #     'y': wqirange,
        #     'name': statename,
        # }
        # data = trace1
        # return Response(data)
        year = int(request.GET.get('year'))
        print(year)

        def assignClass(wqi):
            if wqi <= 25:
                return 'E'
            elif wqi <= 50:
                return 'D'
            elif wqi <= 70:
                return 'C'
            elif wqi <= 90:
                return 'B'
            else:
                return 'A'

        df_year = self.df[self.df['YEAR'] == year]
        df_year['CLASS'] = df_year['WQI'].apply(lambda x: assignClass(x))
        print(df_year)
        x = list(df_year['CLASS'].sort_values(axis=0))
        x.append('A')
        x.append('B')
        x.append('C')
        x.append('D')
        x.append('E')
        print(x.sort())
        return Response(x)


class HeatmapViews(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/heatmap.html')


class HeatMapData(APIView):
    authentication_classes = []
    permission_classes = []

    df = pd.read_excel("chartjs\\templates\\chartjs\\wqilimitstate.xlsx")
    india_states = json.load(
        open("chartjs\\templates\\chartjs\\states_india.geojson"))

    df_year = pd.DataFrame(columns=['STATE', 'ID', 'WQI'])
    df_year['STATE'] = df['STATE'].unique()

    state_id_map = {}
    for feature in india_states["features"]:
        feature["id"] = feature["properties"]["state_code"]
        state_id_map[feature["properties"]["st_nm"]] = feature["id"]

    def get(self, request, format=None):
        year = int(request.GET.get('year'))

        def predict_wqi(state):
            model = joblib.load(
                f'chartjs\\templates\\chartjs\\state_models\\{state}.pkl', mmap_mode='r')
            return model.predict([[year]])[0]

        def capitalizeFirst(state):
            state_new = ''
            for word in state.split():
                state_new += word.capitalize() + ' '
            state_new = state_new.rstrip()
            return state_new

        self.df_year['WQI'] = self.df_year['STATE'].apply(
            lambda x: predict_wqi(x))
        print(self.state_id_map)
        self.df_year["ID"] = self.df_year["STATE"].apply(
            lambda x: self.state_id_map[capitalizeFirst(x)])

        id = np.array(self.df_year['ID'])
        wqi = np.array(self.df_year['WQI'])
        state = np.array(self.df_year['STATE'])

        # print(self.india_states)
        # print(self.india_states['features'][35])
        print("Sucess")
        data = {
            "locations": id,
            "z": wqi,
            "text": state,
            # "geojson": self.india_states
        }

        return Response(data)


class CompareViews(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/compare.html')


class CompareData(APIView):
    authentication_classes = []
    permission_classes = []

    df = pd.read_excel("chartjs/wqilimitriver_morethanequalto5.xlsx")

    def get(self, request, format=None):
        comparerivername = request.GET.get('comparerivername')
        print(comparerivername)
        rivers = comparerivername.split(',')
        print(rivers)
        firstrivername = rivers[0]
        secondrivername = rivers[1]
        wqiriver1 = np.array(
            self.df[self.df['RIVER'] == firstrivername]['WQI'])
        wqiriver2 = np.array(
            self.df[self.df['RIVER'] == secondrivername]['WQI'])
        print(wqiriver1)
        print(wqiriver2)
        firstriverload = joblib.load(
            'chartjs/templates/chartjs/river_models/'+firstrivername+'.pkl')
        firstyears = pd.DataFrame({"YEAR": [i for i in range(2020, 2031)]})
        firstwqi = np.array(firstriverload.predict(firstyears))
        firstyear = ['2009', '2010', '2011', '2012', '2013', '2014',
                     '2015', '2016', '2017', '2018', '2019'] + list(firstyears['YEAR'])
        firstchartdata = list(wqiriver1) + list(firstwqi)
        secondtriverload = joblib.load(
            'chartjs/templates/chartjs/river_models/'+secondrivername+'.pkl')
        secondyears = pd.DataFrame({"YEAR": [i for i in range(2020, 2031)]})
        secondwqi = np.array(secondtriverload.predict(secondyears))
        secondyear = ['2009', '2010', '2011', '2012', '2013', '2014',
                      '2015', '2016', '2017', '2018', '2019'] + list(secondyears['YEAR'])
        secondchartdata = list(wqiriver2) + list(secondwqi)
        trace1 = {
            'type': 'line',
            'x': firstyear,
            'y': firstchartdata,
            'mode': 'lines',
            'name': 'From 2009 to 2030 ' + firstrivername,
            'line': {
                'color': 'rgb(219, 64, 82)',
                'width': 3
            }
        }
        trace2 = {
            'type': 'line',
            'x': secondyear,
            'y': secondchartdata,
            'mode': 'lines',
            'name': 'From 2009 to 2030 ' + secondrivername,
            'line': {
                'color': 'rgb(55, 128, 191)',
                'width': 3
            }
        }
        data = {
            "trace1": trace1,
            "trace2": trace2
        }
        return Response(data)


class ModelRiverViews(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/modelriver.html')


class ModelRiverData(APIView):
    authentication_classes = []
    permission_classes = []
    df = pd.read_excel("chartjs/wqilimitriver_morethanequalto5.xlsx")

    def get(self, request, format=None):
        rivername = request.GET.get('rivername')
        print(rivername)
        wqiriver1 = np.array(self.df[self.df['RIVER'] == rivername]['WQI'])
        print(wqiriver1)
        riverload = joblib.load(
            'chartjs/templates/chartjs/river_models/'+rivername+'.pkl')
        years = pd.DataFrame({"YEAR": [i for i in range(2020, 2031)]})
        wqi = np.array(riverload.predict(years))
        labels = ['2009', '2010', '2011', '2012', '2013', '2014',
                  '2015', '2016', '2017', '2018', '2019'] + list(years['YEAR'])
        chartLabel = 'GANGA'
        chartdata = list(wqiriver1) + list(wqi)
        trace1 = {
            'type': 'line',
            'x': [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
            'y': wqiriver1,
            'mode': 'lines',
            'name': 'From 2009 to 2019',
            'line': {
                'color': 'rgb(219, 64, 82)',
                'width': 3
            }
        }
        trace2 = {
            'type': 'line',
            'x': list(years['YEAR']),
            'y': wqi,
            'mode': 'lines',
            'name': 'From 2020 to 2030',
            'line': {
                'color': 'rgb(55, 128, 191)',
                'width': 3
            }
        }

        data = {
            "trace1": trace1,
            "trace2": trace2
        }
        return Response(data)

    def post(self, response):
        print(response)

class GetDatasetAsPDF(APIView):
    
    authentication_classes = []
    permission_classes = []
    def get(self, request, format=None):
        filename = "chartjs/templates/chartjs/JalrakshanData.pdf"
        response = FileResponse(open(filename,'rb'), content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="Jalrakshan_CPCB_data"'
        return response
class Dataset(APIView):
    authentication_classes = []
    permission_classes = []

    df = pd.read_excel(
        "chartjs/templates/chartjs/Only_Rivers_groupby_interpolated.xlsx")

    def get(self, request, format=None):
        c = int(request.GET.get('counter'))
        data = []
        for i in range(50*c, min(50*c+50, len(self.df))):
            t = {
                'CODE': self.df['STATION CODE'][i],
                'LOCATION': self.df['LOCATION'][i],
                'RIVER': self.df['RIVER'][i],
                'STATE': self.df['STATE'][i],
                'TEMPERATURE': self.df['TEMPERATURE'][i],
                'DO': self.df['DISSOLVED OXYGEN'][i],
                'PH': self.df['PH'][i],
                'CONDUCTIVITY': self.df['CONDUCTIVITY'][i],
                'BOD': self.df['BOD'][i],
                'NITRATE': self.df['NITRATE'][i],
                'COLIFORM': self.df['TOTAL COLIFORM'][i],
                'YEAR': self.df['YEAR'][i]
            }
            data.append(t)
        # print(data)
        return Response(data)
