#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x |  bash -
RUN apt-get install -y nodejs
RUN npm install -g npm@latest

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x |  bash -
RUN apt-get install -y nodejs
RUN npm install -g npm@latest
WORKDIR /src
COPY ["BugTrackerReact/BugTrackerReact.csproj", "BugTrackerReact/"]
RUN dotnet restore "BugTrackerReact/BugTrackerReact.csproj"
COPY . .
WORKDIR "/src/BugTrackerReact"
RUN dotnet build "BugTrackerReact.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BugTrackerReact.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BugTrackerReact.dll"]