import pandas as pd
import glob

filenames = glob.glob("water*.xlsx")
for filename in filenames:
    df = pd.read_excel(filename)
    df['YEAR'] = filename[-9:-5]
    # print(df.columns, df.head())
    df.to_excel('excel_year/'+filename[:-5]+'_year.xlsx', index=False)