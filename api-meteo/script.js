// Configuration API OpenWeatherMap
// IMPORTANT: Remplacez par votre clé API gratuite
const API_KEY = '59691532fb02aa6c643dffb9e271edb7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Éléments du DOM
const getLocationBtn = document.getElementById('getLocationBtn');
const locationResult = document.getElementById('locationResult');
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const cityResult = document.getElementById('cityResult');

// ========== SECTION GÉOLOCALISATION ==========

getLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        showLocationLoading();
        navigator.geolocation.getCurrentPosition(
            onLocationSuccess,
            onLocationError,
            { timeout: 10000 }
        );
    } else {
        showLocationError('La géolocalisation n\'est pas supportée par ce navigateur.');
    }
});

function onLocationSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeatherByCoords(lat, lon);
}

function onLocationError(error) {
    let message = 'Erreur de géolocalisation: ';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message += 'Permission refusée par l\'utilisateur.';
            break;
        case error.POSITION_UNAVAILABLE:
            message += 'Position non disponible.';
            break;
        case error.TIMEOUT:
            message += 'Délai d\'attente dépassé.';
            break;
        default:
            message += 'Erreur inconnue.';
    }
    showLocationError(message);
}

async function fetchWeatherByCoords(lat, lon) {
    try {
        const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=fr`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        
        const data = await response.json();
        displayLocationWeather(data);
    } catch (error) {
        showLocationError('Impossible de récupérer la météo: ' + error.message);
    }
}

function displayLocationWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;
    
    locationResult.innerHTML = `
        <div class="alert alert-light">
            <h4>📍 ${city}, ${country}</h4>
            <div class="temperature text-center">${temp}°C</div>
            <p class="text-center text-capitalize fs-5">${description}</p>
            <div class="row text-center">
                <div class="col-4">
                    <strong>Ressenti</strong><br>
                    ${Math.round(data.main.feels_like)}°C
                </div>
                <div class="col-4">
                    <strong>Humidité</strong><br>
                    ${data.main.humidity}%
                </div>
                <div class="col-4">
                    <strong>Vent</strong><br>
                    ${data.wind.speed} m/s
                </div>
            </div>
        </div>
    `;
}

function showLocationLoading() {
    locationResult.innerHTML = `
        <div class="alert alert-light">
            <div class="d-flex align-items-center">
                <div class="spinner-border spinner-border-sm me-3"></div>
                Localisation en cours...
            </div>
        </div>
    `;
}

function showLocationError(message) {
    locationResult.innerHTML = `
        <div class="alert alert-danger">
            <strong>❌ Erreur:</strong> ${message}
        </div>
    `;
}

// ========== SECTION RECHERCHE VILLE ==========

cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const city = cityInput.value.trim();
    if (!city) {
        showCityError('Veuillez entrer le nom d\'une ville');
        return;
    }
    
    showCityLoading();
    
    try {
        const data = await fetchWeatherByCity(city);
        displayCityWeather(data);
    } catch (error) {
        showCityError(error.message);
    }
});

async function fetchWeatherByCity(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=fr`;
    const response = await fetch(url);
    
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Ville non trouvée. Vérifiez l\'orthographe.');
        } else if (response.status === 401) {
            throw new Error('Clé API invalide. Configurez votre clé API.');
        } else {
            throw new Error('Erreur lors de la récupération des données');
        }
    }
    
    return await response.json();
}

function displayCityWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;
    
    cityResult.innerHTML = `
        <div class="alert alert-light">
            <h4>🏙️ ${city}, ${country}</h4>
            <div class="temperature text-center">${temp}°C</div>
            <p class="text-center text-capitalize fs-5">${description}</p>
            <div class="row text-center">
                <div class="col-4">
                    <strong>Ressenti</strong><br>
                    ${Math.round(data.main.feels_like)}°C
                </div>
                <div class="col-4">
                    <strong>Humidité</strong><br>
                    ${data.main.humidity}%
                </div>
                <div class="col-4">
                    <strong>Vent</strong><br>
                    ${data.wind.speed} m/s
                </div>
            </div>
        </div>
    `;
}

function showCityLoading() {
    cityResult.innerHTML = `
        <div class="alert alert-light">
            <div class="d-flex align-items-center">
                <div class="spinner-border spinner-border-sm me-3"></div>
                Recherche en cours...
            </div>
        </div>
    `;
}

function showCityError(message) {
    cityResult.innerHTML = `
        <div class="alert alert-danger">
            <strong>❌ Erreur:</strong> ${message}
        </div>
    `;
}