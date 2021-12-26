from django.shortcuts import render,redirect
from django.views.generic import View
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
   
## if you don't want to user rest_framework
   
# def get_data(request, *args, **kwargs):
#
# data ={
#             "sales" : 100,
#             "person": 10000,
#     }
#
# return JsonResponse(data) # http response
   
   
#######################################################
   
## using rest_framework classes

   
class ChartData(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, format = None):
        rivername = request.GET.get('rivername')
        print(rivername)
        df = pd.read_excel("chartjs/wqilimitriver_morethanequalto5.xlsx")
        wqi = np.array(df[df['RIVER'] == rivername]['WQI'])
        year = np.array(df[df['RIVER'] == rivername]['YEAR'])
        print(df[df['RIVER'] == rivername])
        trace1 = {
            'type': 'line',
            'x': year,
            'y': wqi,
            'name': rivername,
        }
        data = trace1
        return Response(data)


class StateRiverData(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, format = None):
        statename = request.GET.get('statename')
        print(statename)
        dfstate = pd.read_excel("chartjs/templates/chartjs/wqilimitstate.xlsx")
        dfx = dfstate[dfstate['STATE'] == statename] 
        wqirange = []
        wqirange.append(len(dfx[dfx['WQI'] <= 25]) + len(dfx[0 < dfx['WQI']]))
        wqirange.append(len(dfx[dfx['WQI'] <= 50]) + len(dfx[25 < dfx['WQI']]))
        wqirange.append(len(dfx[dfx['WQI'] <= 70]) + len(dfx[50 < dfx['WQI']]))
        wqirange.append(len(dfx[dfx['WQI'] <= 90]) + len(dfx[70 < dfx['WQI']]))
        wqirange.append(len(dfx[dfx['WQI'] <= 90]) + len(dfx[100 < dfx['WQI']]))
        print(wqirange)
        trace1 = {
            'type': 'bar',
            'x': ['0-25', '25-50', '50-70', '70-90', '90-100'],
            'y': wqirange,
            'name': statename,
        }
        data = trace1
        return Response(data)



class HeatmapViews(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/heatmap.html')


class HeatMapData(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        year = int(request.GET.get('year'))
        print(type(year))
        def capitalizeFirst(state):
            state_new = ''
            for word in state.split():
                state_new += word.capitalize() + ' '
            state_new = state_new.rstrip()
            return state_new

        df = pd.read_excel("chartjs/templates/chartjs/wqilimitstate.xlsx")
        india_states = json.load(open("chartjs/templates/chartjs/states_india.geojson"))

        df_year =pd.DataFrame(columns=['STATE', 'ID', 'WQI'])
        df_year['STATE'] = df['STATE'].unique()
        
        state_id_map = {}
        for feature in india_states["features"]:
            feature["id"] = feature["properties"]["state_code"]
            state_id_map[feature["properties"]["st_nm"]] = feature["id"]
        df_year["ID"] = df_year["STATE"].apply(lambda x: state_id_map[capitalizeFirst(x)])

        def predict_wqi(state):
            model = joblib.load(f'chartjs/templates/chartjs/state_models/{state}.pkl', mmap_mode='r')
            return model.predict([[year]])[0]

        df_year['WQI'] = df_year['STATE'].apply(lambda x: predict_wqi(x))

        id = np.array(df_year['ID'])
        wqi = np.array(df_year['WQI'])
        state = np.array(df_year['STATE'])

        print(id, wqi, state)

        data = {
            "locations": id,
            "z": wqi,
            "text": state,
            "geojson": india_states
        }

        return Response(data)



class CompareViews(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/compare.html') 


class CompareData(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, format = None):
        df = pd.read_excel("chartjs/wqilimitriver_morethanequalto5.xlsx")
        wqiriver1 = np.array(df[df['RIVER'] == 'ARKAVATHI']['WQI'])
        wqiriver2 = np.array(df[df['RIVER'] == 'GANGA']['WQI'])
        year = ['2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018','2019']
        # print(wqi[0], year[0])
        # print(df[df['RIVER'] == 'ARKAVATHI'])
        labels = year
        dataFirst = {
            'label': 'ARKAVATHI',
            'data': wqiriver1,
            'lineTension': 0,
            'borderColor': 'red'
        }
        dataSecond = {
            'label': 'GANGA',
            'data': wqiriver2,
            'lineTension': 0,
            'borderColor': 'blue'
        } 
        data ={
                     "labels":labels,
                     "datasets": [dataFirst, dataSecond]
             }
        return Response(data) 


class ModelRiverViews(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/modelriver.html') 


   
class ModelRiverData(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, format = None):
        df = pd.read_excel("chartjs/wqilimitriver_morethanequalto5.xlsx")
        wqiriver1 = np.array(df[df['RIVER'] == 'GANGA']['WQI'])
        gangaload = joblib.load('chartjs/templates/chartjs/river_models/GANGA.pkl')
        years = pd.DataFrame({"YEAR": [i for i in range (2020,2031)]})
        wqi = np.array(gangaload.predict(years))
        labels = ['2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018','2019'] + list(years['YEAR'])
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
            'name': 'From 2020 to 2031',
            'line': {
              'color': 'rgb(55, 128, 191)',
              'width': 3
            }
        }
        data ={
                     "trace1": trace1,
                     "trace2": trace2
             }
        return Response(data) 

    def post(self, response):
        print(response)
