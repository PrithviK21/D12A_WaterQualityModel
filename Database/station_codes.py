import pandas as pd
import glob

filenames = glob.glob("*.xlsx")
bruh = [pd.read_excel(filename, index_col=None) for filename in filenames]
needed = ['STATION CODE', 'LOCATION']
station_df = pd.DataFrame(columns=needed)
print(station_df.head())
for df in bruh:
    print(df[needed].head())
    station_df = pd.concat([station_df, df[needed]])
    print(station_df.head())