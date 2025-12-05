using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace QuizApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly ILogger<QuizController> _logger;
        private static List<QuizResult> _results = new List<QuizResult>();

        public QuizController(ILogger<QuizController> logger)
        {
            _logger = logger;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitQuiz([FromBody] QuizSubmission submission)
        {
            try
            {
                var result = new QuizResult
                {
                    Id = Guid.NewGuid(),
                    Name = submission.Name,
                    Score = submission.Score,
                    TotalMarks = submission.TotalMarks,
                    Passed = submission.Passed,
                    Answers = submission.Answers,
                    Timestamp = submission.Timestamp,
                    SubmittedAt = DateTime.UtcNow
                };

                _results.Add(result);

                _logger.LogInformation($"Quiz submitted: {submission.Name} scored {submission.Score}/{submission.TotalMarks}");

                return Ok(new { 
                    success = true, 
                    message = "Quiz result submitted successfully",
                    resultId = result.Id
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting quiz result");
                return StatusCode(500, new { success = false, message = "Internal server error" });
            }
        }

        [HttpGet("results")]
        public IActionResult GetResults()
        {
            var results = _results.OrderByDescending(r => r.SubmittedAt).ToList();
            return Ok(results);
        }

        [HttpGet("statistics")]
        public IActionResult GetStatistics()
        {
            var stats = new
            {
                TotalAttempts = _results.Count,
                PassedCount = _results.Count(r => r.Passed),
                FailedCount = _results.Count(r => !r.Passed),
                AverageScore = _results.Any() ? _results.Average(r => r.Score) : 0,
                HighestScore = _results.Any() ? _results.Max(r => r.Score) : 0,
                PassRate = _results.Any() ? (double)_results.Count(r => r.Passed) / _results.Count * 100 : 0
            };

            return Ok(stats);
        }

        [HttpPost("generate")]
        public async Task<IActionResult> GenerateQuiz([FromBody] QuizGenerationRequest request)
        {
            try
            {
                var questions = await GenerateQuestionsFromTopic(request.Topic);
                
                _logger.LogInformation($"Generated quiz for topic: {request.Topic}, User: {request.UserName}");
                
                return Ok(new { questions = questions });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating quiz");
                return StatusCode(500, new { success = false, message = "Quiz generation failed" });
            }
        }

        private async Task<List<QuizQuestion>> GenerateQuestionsFromTopic(string topic)
        {
            // AI-powered question generation (simplified version)
            var questionBank = GetQuestionBank();
            var topicQuestions = questionBank.Where(q => 
                q.Topic.Contains(topic, StringComparison.OrdinalIgnoreCase) ||
                topic.Contains(q.Topic, StringComparison.OrdinalIgnoreCase)
            ).ToList();
            
            if (topicQuestions.Count < 10)
            {
                // If not enough topic-specific questions, add general questions
                var generalQuestions = questionBank.Where(q => q.Topic == "general").ToList();
                topicQuestions.AddRange(generalQuestions.Take(10 - topicQuestions.Count));
            }
            
            // Shuffle and take 10 questions
            var random = new Random();
            return topicQuestions.OrderBy(x => random.Next()).Take(10).ToList();
        }
        
        private List<QuizQuestion> GetQuestionBank()
        {
            return new List<QuizQuestion>
            {
                // Bangladesh History
                new QuizQuestion { Topic = "bangladesh-history", Question = "মহাস্থানগড় কোন জেলায় অবস্থিত?", Options = new[] {"নওগাঁ", "বগুড়া", "রাজশাহী", "নারায়ণগঞ্জ"}, Correct = 1, Marks = 3 },
                new QuizQuestion { Topic = "bangladesh-history", Question = "বাংলার শেষ স্বাধীন নবাব কে ছিলেন?", Options = new[] {"মুর্শিদকুলি খান", "সরফরাজ খান", "সিরাজ-উদ-দৌলা", "আলীবর্দী খান"}, Correct = 2, Marks = 3 },
                
                // Science
                new QuizQuestion { Topic = "science", Question = "পানির রাসায়নিক সংকেত কী?", Options = new[] {"H2O", "CO2", "O2", "N2"}, Correct = 0, Marks = 3 },
                new QuizQuestion { Topic = "science", Question = "মানুষের শরীরে কতটি হাড় আছে?", Options = new[] {"২০৬", "২০৮", "২১০", "২১২"}, Correct = 0, Marks = 3 },
                
                // Geography
                new QuizQuestion { Topic = "geography", Question = "বিশ্বের সবচেয়ে লম্বা নদী কোনটি?", Options = new[] {"আমাজন", "নীল", "গঙ্গা", "মিসিসিপি"}, Correct = 1, Marks = 3 },
                
                // Literature
                new QuizQuestion { Topic = "literature", Question = "রবীন্দ্রনাথ ঠাকুর কত সালে নোবেল পুরস্কার পান?", Options = new[] {"১৯১২", "১৯১৩", "১৯১৪", "১৯১৫"}, Correct = 1, Marks = 3 },
                
                // Sports
                new QuizQuestion { Topic = "sports", Question = "বাংলাদেশের জাতীয় খেলা কী?", Options = new[] {"ক্রিকেট", "ফুটবল", "কাবাডি", "হকি"}, Correct = 2, Marks = 3 },
                
                // Technology
                new QuizQuestion { Topic = "technology", Question = "ইন্টারনেটের জনক কাকে বলা হয়?", Options = new[] {"বিল গেটস", "টিম বার্নার্স লি", "স্টিভ জবস", "মার্ক জাকারবার্গ"}, Correct = 1, Marks = 3 },
                
                // General Knowledge
                new QuizQuestion { Topic = "general", Question = "বাংলাদেশের রাজধানী কোনটি?", Options = new[] {"চট্টগ্রাম", "ঢাকা", "সিলেট", "খুলনা"}, Correct = 1, Marks = 3 },
                new QuizQuestion { Topic = "general", Question = "বাংলাদেশের মুক্তিযুদ্ধ কত দিন স্থায়ী হয়েছিল?", Options = new[] {"২৬৬ দিন", "২৬৭ দিন", "২৬৮ দিন", "২৬৯ দিন"}, Correct = 0, Marks = 3 }
            };
        }

        [HttpGet("certificate/{resultId}")]
        public IActionResult GenerateCertificate(Guid resultId)
        {
            var result = _results.FirstOrDefault(r => r.Id == resultId);
            if (result == null || !result.Passed)
            {
                return NotFound("Certificate not found or student did not pass");
            }

            var certificate = new
            {
                StudentName = result.Name,
                Score = result.Score,
                TotalMarks = result.TotalMarks,
                Date = result.SubmittedAt.ToString("dd MMMM yyyy"),
                CertificateNumber = $"SMART-QUIZ-{result.Id.ToString().Substring(0, 8).ToUpper()}",
                IssuedBy = "স্মার্ট কুইজ সিস্টেম"
            };

            return Ok(certificate);
        }
    }

    public class QuizGenerationRequest
    {
        public string Topic { get; set; } = string.Empty;
        public string UserId { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
    }
    
    public class QuizQuestion
    {
        public string Topic { get; set; } = string.Empty;
        public string Question { get; set; } = string.Empty;
        public string[] Options { get; set; } = new string[4];
        public int Correct { get; set; }
        public int Marks { get; set; }
    }

    public class QuizSubmission
    {
        public string Name { get; set; } = string.Empty;
        public int Score { get; set; }
        public int TotalMarks { get; set; }
        public bool Passed { get; set; }
        public List<int> Answers { get; set; } = new List<int>();
        public DateTime Timestamp { get; set; }
    }

    public class QuizResult
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Score { get; set; }
        public int TotalMarks { get; set; }
        public bool Passed { get; set; }
        public List<int> Answers { get; set; } = new List<int>();
        public DateTime Timestamp { get; set; }
        public DateTime SubmittedAt { get; set; }
    }
}