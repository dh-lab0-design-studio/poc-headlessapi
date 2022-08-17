FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source
COPY ./*.sln .

COPY POCHeadLess.MinimalAPI.Backend/. ./POCHeadLess.MinimalAPI.Backend/
RUN ls -lahR && dotnet restore
WORKDIR /source/POCHeadLess.MinimalAPI.Backend/
RUN dotnet publish -c release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "POCHeadLess.MinimalAPI.Backend.dll"]