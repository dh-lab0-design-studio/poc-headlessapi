using Microsoft.AspNetCore.Mvc;
using POCHeadLess.MinimalAPI.Backend.Interfaces;
using POCHeadLess.MinimalAPI.Backend.Models;
using POCHeadLess.MinimalAPI.Backend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<IExampleService, ExampleService>();
builder.Services.AddCors();

var app = builder.Build();

app.UseCors((cp) => {
    cp.AllowAnyHeader()
    .AllowAnyMethod()
    .AllowAnyOrigin();
});
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseDefaultFiles();

app.UseStaticFiles();

app.UseHttpsRedirection();

app.MapGet("/example", ([FromServices]IExampleService svc) => Results.Ok(new ExampleMessage(svc.GetGoodMessage()))).WithName("GetExampleMessage");

app.Run();

