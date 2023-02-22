FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine3.17 as publish

WORKDIR /sln

COPY . .

RUN dotnet publish \
      -c Release \
      -o /publish

FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine3.17 as release

COPY --from=publish /publish /app

ENV ASPNETCORE_URLS=http://+:80
EXPOSE 80

ENTRYPOINT [ "dotnet", "/app/DemoApi.dll" ]
