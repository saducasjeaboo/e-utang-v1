
const firebaseConfig = {
    // THIS IS A PLACEHOLDER. User should replace with their own firebase config.
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const App = {
    $: {
        app: document.querySelector('#app')
    },

    init() {
        // For now, let's just render the login page.
        // We will add routing and state management later.
        this.renderLoginPage();
    },

    renderLoginPage() {
        const html = `
            <div class="login-container">
                <h1>E-Utang System</h1>
                <h2>AJEJE’S SARI-SARI STORE</h2>
                <input type="password" id="password" placeholder="Password">
                <button id="loginBtn">Login</button>
                <p class="footer">Made by <a href="https://saducasjeaboo.github.io/my-web/" target="_blank">Jeabo Ray Saducas</a></p>
            </div>
        `;
        this.$.app.innerHTML = html;

        this.$.app.querySelector('#loginBtn').addEventListener('click', () => {
            const password = this.$.app.querySelector('#password').value;
            if (password === 'utang1234') {
                this.renderDebtorsPage();
            } else {
                alert('Incorrect password');
            }
        });
    },

    renderDebtorsPage() {
        const html = `
            <div class="header">
                <div class="actions">
                    <button id="themeToggle">🌓</button>
                    <button id="searchBtn">🔍</button>
                </div>
            </div>
            <div class="debtors-list">
                <!-- Debtor cards will be rendered here -->
            </div>
             <div class="footer">
                <p>Made by <a href="https://saducasjeaboo.github.io/my-web/" target="_blank">Jeabo Ray Saducas</a></p>
            </div>
        `;
        this.$.app.innerHTML = html;
        // more logic to come
    }


};

window.addEventListener('load', () => App.init());
