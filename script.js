function getRandomProverb() {
    var proverbs = ["Subhan-a- Rabi Al-a-la wa-bi-Hamdih", "Subhan-a- Rabi Al-Azeem wa-bi-Hamdih", "Allahu'akbar", "La Haula Wala Kuwata illabillah", "hasbunallah wa nimal wakil", "Subhan Allah wa-bi Hamdih", "Subhan Allah", "Alhamdulillah"];
    return proverbs[Math.floor(Math.random() * proverbs.length)];
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var proverb = getRandomProverb();
    document.getElementById("proverb").innerHTML = proverb;
  });
  