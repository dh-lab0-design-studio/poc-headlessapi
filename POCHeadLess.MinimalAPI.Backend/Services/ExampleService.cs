using POCHeadLess.MinimalAPI.Backend.Interfaces;

namespace POCHeadLess.MinimalAPI.Backend.Services;

public class ExampleService : IExampleService
{
    public string GetGoodMessage() => $"id:{Guid.NewGuid():N}";
}