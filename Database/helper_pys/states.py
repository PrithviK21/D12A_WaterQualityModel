import pandas as pd

excel_file = "water_quality_rivers_2007.xlsx"

shubham_df = pd.read_excel("station_codes_with_states.xlsx")
df = pd.read_excel(excel_file)

for ind in df.index:
    # checks if current station code exists and gets the particular row
    try:
        df['STATE'][ind] = shubham_df[shubham_df['STATION CODE'] == df['STATION CODE'][ind]]['STATE'].values[0]
    except:
        df['STATE'][ind] = -1
 
# print(df.STATE)
df.to_excel("output.xlsx")