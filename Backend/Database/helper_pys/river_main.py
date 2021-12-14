import pandas as pd

excel_file = "Water_Quality_Rivers.xlsx"

station_df = pd.read_excel("station_codes_only_rivers.xlsx")
df = pd.read_excel(excel_file)



for ind in df.index:
    # checks if current station code exists and gets the particular row
    try:
        df['RIVER'][ind] = station_df[station_df['STATION CODE'] == df['STATION CODE'][ind]]['RIVER'].values[0]
        df['LOCATION'][ind] = station_df[station_df['STATION CODE'] == df['STATION CODE'][ind]]['LOCATION'].values[0]
    except:
        df['RIVER'][ind] = "NONE"
 

indexNames = df[ df['RIVER'] == 'NONE' ].index
df.drop(indexNames , inplace=True)
df.to_excel("outputfinal.xlsx")