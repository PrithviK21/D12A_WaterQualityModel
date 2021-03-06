"""chart URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from chartjs import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomeView.as_view()),
    # path('test-api', views.get_data),
    path('api/', views.ChartData.as_view()),
    path('heatmap/', views.HeatmapViews.as_view()),
    path('heatmapapi/', views.HeatMapData.as_view()),
    path('compare/', views.CompareViews.as_view()),
    path('compareapi/', views.CompareData.as_view()),
    path('modelriver/', views.ModelRiverViews.as_view()),
    path('modelriverapi/', views.ModelRiverData.as_view()),
    path('countwqiapi/', views.CountWQIData.as_view()),
    path('dataset/', views.Dataset.as_view()),
    path('pdfdata/', views.GetDatasetAsPDF.as_view()),
]
