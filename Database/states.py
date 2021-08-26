import pandas as pd

excel_file = "water_quality_rivers_2010.xlsx"

shubham_df = pd.read_excel("water_quality_rivers_2009.xlsx")
df = pd.read_excel(excel_file)

for ind in df.index:
    # checks if current station code exists and gets the particular row
    try:
        df['States'][ind] = shubham_df[shubham_df['STATION CODE'] == df['STATION CODE'][ind]]['States'].values[0]
    except:
        df['States'][ind] = -1
 
# print(df.States)
df.to_excel("output.xlsx")