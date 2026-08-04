const challengeConfig = {
  sprint30: { label: 'Sprint 30s', seconds: 30 },
  classic60: { label: 'Classic 60s', seconds: 60 },
  precision45: { label: 'Precision 45s', seconds: 45 },
  daily: { label: 'Daily challenge', seconds: 60 }
};

const difficultyConfig = {
  easy: { factor: 0.9 },
  medium: { factor: 1 },
  hard: { factor: 1.15 }
};

const quotePool = {
  easy: [
    'Practice makes your fingers feel lighter and your thoughts more precise.',
    'Small steps every day build strong habits and faster typing.',
    'A calm mind and steady rhythm help you type with confidence.',
    'The secret to speed is smooth movement and clear focus.',
    'Good habits create progress, and progress creates speed.',
    'Typing with ease starts with relaxed hands and a clear plan.',
    'Every smooth sentence begins with one calm, deliberate keystroke.',
    'Short practice sessions keep your skills sharp and your mind fresh.',
    'A little patience turns awkward motions into confident, quick typing.',
    'Consistency matters more than intensity when you want lasting improvement.'
  ],
  medium: [
    'Success is the sum of small efforts, repeated day in and day out.',
    'Typing with focus and rhythm turns practice into confidence and speed.',
    'The best way to improve is to keep your hands relaxed and your mind steady.',
    'Every accurate key press builds momentum, and momentum becomes mastery.',
    'Great work comes from patience, repetition, and a willingness to improve.',
    'When you type with intention, your speed and precision start to grow together.',
    'Strong habits turn routine practice into measurable progress over time.',
    'Improvement feels natural when you stay relaxed, accurate, and consistent.',
    'Focus on the next sentence, and your confidence will rise with each line.',
    'A good rhythm makes difficult passages feel simple and smooth to manage.'
  ],
  hard: [
    'Precision under pressure distinguishes a capable typist from someone who merely types quickly without control.',
    'Consistency, pattern recognition, and deliberate practice are the foundations of unstoppable keyboard fluency.',
    'Mastery requires balancing speed with awareness, especially when sentences become longer and more demanding.',
    'Every keystroke reveals a pattern of habit, and every corrected mistake refines the next attempt.',
    'A disciplined rhythm turns complex text into a smooth, almost effortless mechanical flow.',
    'Professional accuracy is less about raw speed and more about controlled movement, disciplined focus, and deliberate decision making.',
    'The strongest typists are not simply faster; they notice patterns, correct errors early, and maintain a calm, measured cadence.',
    'Repeated practice exposes weak habits, but it also reveals the steady, almost invisible structure of real improvement.',
    'When concentration remains high and tension stays low, even difficult passages become manageable and remarkably fluid.',
    'Longer text demands careful pacing, awareness of rhythm, and the confidence to keep moving without losing precision.'
  ]
};

const wordPool = [
  'focus', 'rhythm', 'steady', 'habit', 'speed', 'practice', 'calm', 'flow', 'skill', 'progress',
  'typing', 'accuracy', 'precision', 'effort', 'keyboard', 'smooth', 'momentum', 'brisk', 'bright',
  'mastery', 'technique', 'clarity', 'confidence', 'dedication', 'pattern', 'refine', 'grit',
  'repetition', 'balance', 'power', 'growth', 'measured', 'crisp', 'clean', 'fingers', 'screen'
];

const numberPool = [
  '482', '728', '921', '104', '673', '333', '905', '118', '640', '777',
  '245', '519', '864', '301', '992', '148', '256', '837', '410', '663'
];

const leaderboardKey = 'typing-speed-leaderboard-v1';
const statsKey = 'typing-speed-stats-v1';
const dailyBestKey = 'typing-speed-daily-best-v1';
const historyKey = 'typing-speed-history-v1';

const timeValue = document.getElementById('timeValue');
const wpmValue = document.getElementById('wpmValue');
const accuracyValue = document.getElementById('accuracyValue');
const charsValue = document.getElementById('charsValue');
const progressValue = document.getElementById('progressValue');
const progressFill = document.getElementById('progressFill');
const quoteEl = document.getElementById('quote');
const typingInput = document.getElementById('typingInput');
const messageEl = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');
const modeSelect = document.getElementById('modeSelect');
const challengeSelect = document.getElementById('challengeSelect');
const difficultySelect = document.getElementById('difficultySelect');
const themeSelect = document.getElementById('themeSelect');
const drillSelect = document.getElementById('drillSelect');
const customTextInput = document.getElementById('customTextInput');
const useCustomTextBtn = document.getElementById('useCustomTextBtn');
const randomQuoteBtn = document.getElementById('randomQuoteBtn');
const soundBtn = document.getElementById('soundBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const mainLogoutBtn = document.getElementById('mainLogoutBtn');
const mainAccountPanel = document.getElementById('mainAccountPanel');
const mainUserName = document.getElementById('mainUserName');
const mainUserHandle = document.getElementById('mainUserHandle');
const mainUserStreak = document.getElementById('mainUserStreak');
const mainUserBest = document.getElementById('mainUserBest');
const mainUserSessions = document.getElementById('mainUserSessions');
const mainEditProfileBtn = document.getElementById('mainEditProfileBtn');
const playerName = document.getElementById('playerName');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const leaderboardList = document.getElementById('leaderboardList');
const bestWpmValue = document.getElementById('bestWpmValue');
const avgAccuracyValue = document.getElementById('avgAccuracyValue');
const sessionsValue = document.getElementById('sessionsValue');
const dailyBestValue = document.getElementById('dailyBestValue');
const summaryModal = document.getElementById('summaryModal');
const closeSummaryBtn = document.getElementById('closeSummaryBtn');
const summaryWpm = document.getElementById('summaryWpm');
const summaryAccuracy = document.getElementById('summaryAccuracy');
const summaryMode = document.getElementById('summaryMode');
const summaryChallenge = document.getElementById('summaryChallenge');
const summaryNote = document.getElementById('summaryNote');
const dailyChallengeBtn = document.getElementById('dailyChallengeBtn');
const dailyChallengeTitle = document.getElementById('dailyChallengeTitle');
const dailyChallengeText = document.getElementById('dailyChallengeText');
const battlePanel = document.getElementById('battlePanel');
const battleStatus = document.getElementById('battleStatus');
const playerBattleProgress = document.getElementById('playerBattleProgress');
const cpuBattleProgress = document.getElementById('cpuBattleProgress');
const historyList = document.getElementById('historyList');
const weeklyChart = document.getElementById('weeklyChart');
const mainStreakValue = document.getElementById('mainStreakValue');
const authShell = document.getElementById('authShell');
const appMain = document.getElementById('appMain');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showLoginBtn = document.getElementById('showLoginBtn');
const showSignupBtn = document.getElementById('showSignupBtn');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const signupName = document.getElementById('signupName');
const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
const signupUsernameHint = document.getElementById('signupUsernameHint');
const logoutBtn = document.getElementById('logoutBtn');
const editProfileBtn = document.getElementById('editProfileBtn');
const profileEditor = document.getElementById('profileEditor');
const profileNameInput = document.getElementById('profileNameInput');
const profileUsernameInput = document.getElementById('profileUsernameInput');
const profileUsernameHint = document.getElementById('profileUsernameHint');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const cancelProfileBtn = document.getElementById('cancelProfileBtn');
const accountPanel = document.getElementById('accountPanel');
const currentUserName = document.getElementById('currentUserName');
const currentUserHandle = document.getElementById('currentUserHandle');
const streakValue = document.getElementById('streakValue');
const profileBestValue = document.getElementById('profileBestValue');
const profileSessionValue = document.getElementById('profileSessionValue');
const achievementList = document.getElementById('achievementList');
const adminTools = document.getElementById('adminTools');
const adminResetLeaderboardBtn = document.getElementById('adminResetLeaderboardBtn');
const adminResetStatsBtn = document.getElementById('adminResetStatsBtn');
const adminStreakBoostBtn = document.getElementById('adminStreakBoostBtn');

const userKey = 'typing-speed-users-v1';
const currentUserKey = 'typing-speed-current-user-v1';

const state = {
  quote: '',
  customText: '',
  mode: 'sentences',
  challenge: 'classic60',
  drill: 'all',
  timeLeft: 60,
  timerId: null,
  started: false,
  finished: false,
  difficulty: 'medium',
  soundOn: true,
  lastTypedLength: 0,
  summaryShown: false,
  authMode: 'login',
  battleIsActive: false,
  battleCpuProgress: 0,
  battlePlayerProgress: 0
};

function getDifficultyConfig() {
  return difficultyConfig[state.difficulty] || difficultyConfig.medium;
}

function getChallengeConfig() {
  return challengeConfig[state.challenge] || challengeConfig.classic60;
}

function generateWordSet() {
  const wordsNeeded = Math.max(12, Math.min(50, Math.round(getChallengeConfig().seconds / 2) + 8));
  const generated = [];

  for (let i = 0; i < wordsNeeded; i += 1) {
    generated.push(wordPool[Math.floor(Math.random() * wordPool.length)]);
  }

  return generated.join(' ');
}

function generateNumberSet() {
  const itemsNeeded = Math.max(8, Math.min(28, Math.round(getChallengeConfig().seconds / 2) + 4));
  const generated = [];

  for (let i = 0; i < itemsNeeded; i += 1) {
    generated.push(numberPool[Math.floor(Math.random() * numberPool.length)]);
  }

  return generated.join(' ');
}

function generateMixedSet() {
  const generated = [];
  const totalItems = Math.max(12, Math.min(30, Math.round(getChallengeConfig().seconds / 2) + 6));

  for (let i = 0; i < totalItems; i += 1) {
    const source = Math.random() > 0.55 ? wordPool : numberPool;
    generated.push(source[Math.floor(Math.random() * source.length)]);
  }

  return generated.join(' ');
}

function getRandomQuote() {
  const options = quotePool[state.difficulty] || quotePool.medium;
  return options[Math.floor(Math.random() * options.length)];
}

function createDailyChallengePlan() {
  const seed = new Date().toISOString().slice(0, 10);
  const hash = [...seed].reduce((total, char) => total + char.charCodeAt(0), 0);
  const plans = [
    {
      title: 'Focus sprint',
      description: 'Goal: keep your rhythm smooth and your fingers relaxed.',
      text: 'Focus on a steady beat, calm hands, and smooth keystrokes. Let accuracy lead the way while your speed grows with every sentence.'
    },
    {
      title: 'Home row harmony',
      description: 'Goal: build confidence on the core keys.',
      text: 'asdf jkl; asdf jkl; asdf jkl; focus on rhythm and clean spacing. Keep your fingers anchored and your wrists relaxed.'
    },
    {
      title: 'Punctuation precision',
      description: 'Goal: move cleanly through commas, periods, and semicolons.',
      text: 'Practice with precision: slow down, breathe, and type with control. Commas, periods, and semicolons should feel natural and deliberate.'
    },
    {
      title: 'Number flow',
      description: 'Goal: keep digits moving without losing control.',
      text: '482 673 905 118 640 777 301 256 837 410. Maintain a calm pace and trust each number as it lands.'
    }
  ];

  return plans[hash % plans.length];
}

function generateDrillText() {
  const drill = state.drill || 'all';

  if (drill === 'home-row') {
    const homeRow = ['asdf', 'jkl;', 'fdsa', 'l;kj', 'asdf', 'ghjkl', 'jkl;', 'sdfg', 'hjk', 'asdf'];
    const generated = [];

    for (let i = 0; i < 16; i += 1) {
      generated.push(homeRow[Math.floor(Math.random() * homeRow.length)]);
    }

    return generated.join(' ');
  }

  if (drill === 'punctuation') {
    const phrases = [
      'Keep your pace steady, and the punctuation will feel easy.',
      'Clear thoughts, clean spacing, and calm rhythm build momentum.',
      'Breathe, focus, and type with control; punctuation should stay smooth.',
      'Precision matters: commas, periods, and semicolons all flow better with patience.'
    ];

    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  if (drill === 'caps') {
    const words = ['FAST', 'FOCUS', 'CLEAR', 'CLEAN', 'FLOW', 'SMART', 'STEADY', 'POWER', 'CALM', 'PRECISION'];
    const generated = [];

    for (let i = 0; i < 16; i += 1) {
      generated.push(words[Math.floor(Math.random() * words.length)]);
    }

    return generated.join(' ');
  }

  if (drill === 'numbers') {
    return generateNumberSet();
  }

  return getRandomQuote();
}

function buildQuote() {
  let baseText = '';

  if (state.challenge === 'cpu-battle') {
    baseText = generateBattleQuote();
    state.battleCpuProgress = 0;
    state.battlePlayerProgress = 0;
  } else if (state.mode === 'custom' && state.customText.trim()) {
    baseText = state.customText.trim();
  } else if (state.challenge === 'daily') {
    const plan = createDailyChallengePlan();
    baseText = plan.text;
    dailyChallengeTitle.textContent = plan.title;
    dailyChallengeText.textContent = plan.description;
  } else if (state.drill !== 'all') {
    baseText = generateDrillText();
  } else if (state.mode === 'words') {
    baseText = generateWordSet();
  } else if (state.mode === 'numbers') {
    baseText = generateNumberSet();
  } else if (state.mode === 'mixed') {
    baseText = generateMixedSet();
  } else {
    baseText = getRandomQuote();
  }

  if (!baseText) {
    baseText = getRandomQuote();
  }

  state.quote = baseText;
  quoteEl.innerHTML = [...state.quote]
    .map((char) => `<span>${char}</span>`)
    .join('');
  updateProgress();
}

function migrateLegacyUsers() {
  try {
    const raw = localStorage.getItem(userKey);
    if (!raw) return;

    const users = JSON.parse(raw);
    const migrated = users.map((user) => {
      const username = (user.username || user.name || user.email || 'player').toString().trim();
      const normalizedUsername = username.replace(/\s+/g, '').toLowerCase();

      return {
        ...user,
        username: normalizedUsername,
        name: user.name || username,
        email: user.email || null,
        password: user.password || ''
      };
    });

    localStorage.setItem(userKey, JSON.stringify(migrated));
  } catch (error) {
    // Ignore migration issues and continue with empty storage.
  }
}

function normalizeUsername(value) {
  return (value || '').trim().replace(/\s+/g, '').toLowerCase();
}

function getUsers() {
  try {
    const raw = localStorage.getItem(userKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function ensureDanielAccount() {
  const users = getUsers();
  const hasDaniel = users.some((entry) => normalizeUsername(entry.username || '') === 'daniel');

  if (!hasDaniel) {
    users.push({
      id: 'daniel-admin',
      name: 'Daniel',
      username: 'daniel',
      email: null,
      password: 'daniel123',
      bestWpm: 42,
      totalAccuracy: 980,
      sessions: 14,
      streakDays: 7,
      lastSessionDate: new Date().toISOString().slice(0, 10),
      history: []
    });
    saveUsers(users);
  }
}

function saveUsers(users) {
  localStorage.setItem(userKey, JSON.stringify(users));
}

function validateUsernameAvailability(username, allowCurrentUser = false) {
  const normalized = normalizeUsername(username);
  const currentUser = getCurrentUser();

  if (!normalized) {
    return { valid: false, message: 'Username is required.' };
  }

  const taken = getUsers().some((entry) => {
    const sameUser = allowCurrentUser && currentUser && entry.username === currentUser.username;
    return entry.username && entry.username === normalized && !sameUser;
  });

  if (taken) {
    return { valid: false, message: 'Username is already taken.' };
  }

  return { valid: true, message: 'Username is available.' };
}

function updateSignupUsernameHint() {
  const username = normalizeUsername(signupUsername.value);
  if (!username) {
    signupUsernameHint.textContent = '';
    signupUsernameHint.className = 'auth-hint';
    signupUsername.setCustomValidity('');
    return;
  }

  const result = validateUsernameAvailability(username, false);
  signupUsernameHint.textContent = result.message;
  signupUsernameHint.classList.toggle('error', !result.valid);
  signupUsernameHint.classList.toggle('success', result.valid);
  signupUsername.setCustomValidity(result.valid ? '' : 'Username taken');
}

function updateProfileUsernameHint() {
  const username = normalizeUsername(profileUsernameInput.value);
  const currentUser = getCurrentUser();

  if (!username) {
    profileUsernameHint.textContent = '';
    profileUsernameHint.className = 'auth-hint';
    profileUsernameInput.setCustomValidity('');
    return;
  }

  const result = validateUsernameAvailability(username, true);
  profileUsernameHint.textContent = result.message;
  profileUsernameHint.classList.toggle('error', !result.valid);
  profileUsernameHint.classList.toggle('success', result.valid);
  profileUsernameInput.setCustomValidity(result.valid ? '' : 'Username taken');
}

function getCurrentUser() {
  try {
    const raw = localStorage.getItem(currentUserKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function setCurrentUser(user) {
  localStorage.setItem(currentUserKey, JSON.stringify(user));
}

function createUserProfile(name, username, password) {
  const safeUsername = username.trim().replace(/\s+/g, '').toLowerCase();

  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: name.trim(),
    username: safeUsername,
    email: null,
    password,
    bestWpm: 0,
    totalAccuracy: 0,
    sessions: 0,
    streakDays: 0,
    lastSessionDate: null,
    history: []
  };
}

function getAchievementList(user) {
  const base = [
    { id: 'first-run', label: 'First run', unlocked: (user.sessions || 0) >= 1 },
    { id: 'speed-35', label: 'Speed starter', unlocked: (user.bestWpm || 0) >= 35 },
    { id: 'accuracy-95', label: 'Precision pro', unlocked: (user.sessions ? Math.round((user.totalAccuracy || 0) / user.sessions) : 0) >= 95 },
    { id: 'streak-3', label: '3-day streak', unlocked: (user.streakDays || 0) >= 3 }
  ];

  return base;
}

function isAdminUser(user) {
  if (!user) return false;
  const username = normalizeUsername(user.username || '');
  const name = normalizeUsername(user.name || '');
  return username === 'daniel' || name === 'daniel';
}

function renderAdminTools() {
  const user = getCurrentUser();
  const isAdmin = isAdminUser(user);
  adminTools.classList.toggle('hidden', !isAdmin);
}

function renderAccountPanel() {
  const user = getCurrentUser();

  if (!user) {
    appMain.classList.add('hidden');
    authShell.classList.remove('hidden');
    accountPanel.classList.add('hidden');
    mainAccountPanel.classList.add('hidden');
    return;
  }

  appMain.classList.remove('hidden');
  authShell.classList.add('hidden');
  accountPanel.classList.remove('hidden');
  mainAccountPanel.classList.remove('hidden');

  currentUserName.textContent = user.name || user.username || 'Player';
  currentUserHandle.textContent = `@${user.username || 'player'}`;
  mainUserName.textContent = user.name || user.username || 'Player';
  mainUserHandle.textContent = `@${user.username || 'player'}`;
  streakValue.textContent = String(user.streakDays || 0);
  mainStreakValue.textContent = String(user.streakDays || 0);
  mainUserStreak.textContent = String(user.streakDays || 0);
  profileBestValue.textContent = String(user.bestWpm || 0);
  profileSessionValue.textContent = String(user.sessions || 0);
  mainUserBest.textContent = String(user.bestWpm || 0);
  mainUserSessions.textContent = String(user.sessions || 0);

  if (!profileEditor.classList.contains('hidden')) {
    profileNameInput.value = user.name || '';
    profileUsernameInput.value = user.username || '';
    updateProfileUsernameHint();
  }

  achievementList.innerHTML = getAchievementList(user)
    .map((achievement) => `
      <span class="achievement-badge ${achievement.unlocked ? 'unlocked' : ''}">
        ${achievement.label}
      </span>
    `)
    .join('');

  renderAdminTools();
}

function setAuthMode(mode) {
  state.authMode = mode;
  showLoginBtn.classList.toggle('active', mode === 'login');
  showSignupBtn.classList.toggle('active', mode === 'signup');
  loginForm.classList.toggle('hidden', mode !== 'login');
  signupForm.classList.toggle('hidden', mode !== 'signup');
}

function handleLogin(event) {
  event.preventDefault();
  const username = normalizeUsername(loginUsername.value);
  const password = loginPassword.value.trim();
  const users = getUsers();
  const user = users.find((entry) => normalizeUsername(entry.username) === username && entry.password === password);

  loginUsername.setCustomValidity('');
  loginPassword.setCustomValidity('');

  if (!username || !password || !user) {
    loginUsername.setCustomValidity('Invalid username or password');
    loginPassword.setCustomValidity('Invalid username or password');
    messageEl.textContent = 'Invalid username or password.';
    messageEl.className = 'message error';
    return;
  }

  setCurrentUser(user);
  loginForm.reset();
  renderAccountPanel();
  messageEl.textContent = `Welcome back, ${user.name || user.username}!`;
  messageEl.className = 'message success';
}

function handleSignup(event) {
  event.preventDefault();
  const name = signupName.value.trim();
  const username = normalizeUsername(signupUsername.value);
  const password = signupPassword.value.trim();

  signupUsername.setCustomValidity('');
  signupPassword.setCustomValidity('');

  if (!name || !username || password.length < 4) {
    signupUsername.setCustomValidity('Username is required');
    signupPassword.setCustomValidity('Password must be at least 4 characters');
    messageEl.textContent = 'Please add a display name, a username, and use a password with at least 4 characters.';
    messageEl.className = 'message error';
    return;
  }

  const users = getUsers();
  const existing = users.some((entry) => normalizeUsername(entry.username) === username);

  if (existing) {
    signupUsername.setCustomValidity('Username is already taken');
    signupUsernameHint.textContent = 'Username is already taken.';
    signupUsernameHint.classList.add('error');
    signupUsernameHint.classList.remove('success');
    messageEl.textContent = 'That username is already taken.';
    messageEl.className = 'message error';
    return;
  }

  const newUser = createUserProfile(name, username, password);
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  signupForm.reset();
  signupUsernameHint.textContent = '';
  signupUsernameHint.className = 'auth-hint';
  renderAccountPanel();
  messageEl.textContent = `Account created for ${newUser.name}.`;
  messageEl.className = 'message success';
}

function logoutUser() {
  localStorage.removeItem(currentUserKey);
  profileEditor.classList.add('hidden');
  renderAccountPanel();
  messageEl.textContent = 'You have been logged out.';
  messageEl.className = 'message';
}

function openProfileEditor() {
  const user = getCurrentUser();
  if (!user) return;

  profileEditor.classList.remove('hidden');
  profileNameInput.value = user.name || '';
  profileUsernameInput.value = user.username || '';
  updateProfileUsernameHint();
}

function closeProfileEditor() {
  profileEditor.classList.add('hidden');
  profileUsernameHint.textContent = '';
  profileUsernameHint.className = 'auth-hint';
}

function saveProfileChanges() {
  const user = getCurrentUser();
  if (!user) return;

  const newName = profileNameInput.value.trim();
  const newUsername = normalizeUsername(profileUsernameInput.value);

  if (!newName || !newUsername) {
    messageEl.textContent = 'Display name and username are required.';
    messageEl.className = 'message error';
    return;
  }

  const result = validateUsernameAvailability(newUsername, true);
  if (!result.valid) {
    messageEl.textContent = result.message;
    messageEl.className = 'message error';
    return;
  }

  const users = getUsers();
  const target = users.find((entry) => normalizeUsername(entry.username) === normalizeUsername(user.username));

  if (!target) {
    messageEl.textContent = 'Profile could not be saved.';
    messageEl.className = 'message error';
    return;
  }

  target.name = newName;
  target.username = newUsername;
  saveUsers(users);
  setCurrentUser(target);
  closeProfileEditor();
  renderAccountPanel();
  messageEl.textContent = 'Profile updated successfully.';
  messageEl.className = 'message success';
}

function updateUserStats(result) {
  const user = getCurrentUser();
  if (!user) return;

  const users = getUsers();
  const target = users.find((entry) => (entry.username || '').toLowerCase() === (user.username || '').toLowerCase());
  if (!target) return;

  const today = new Date().toISOString().slice(0, 10);
  const previousDate = target.lastSessionDate;

  if (!previousDate) {
    target.streakDays = 1;
  } else {
    const previous = new Date(previousDate);
    const current = new Date(today);
    const dayDifference = Math.round((current - previous) / 86400000);

    if (dayDifference === 0) {
      target.streakDays = target.streakDays || 1;
    } else if (dayDifference === 1) {
      target.streakDays = (target.streakDays || 0) + 1;
    } else {
      target.streakDays = 1;
    }
  }

  target.lastSessionDate = today;
  target.sessions = (target.sessions || 0) + 1;
  target.bestWpm = Math.max(target.bestWpm || 0, result.wpm || 0);
  target.totalAccuracy = (target.totalAccuracy || 0) + Number(result.accuracy || 0);
  target.history = [{
    date: today,
    wpm: result.wpm,
    accuracy: result.accuracy,
    challenge: state.challenge,
    mode: state.mode
  }, ...(target.history || [])].slice(0, 8);

  saveUsers(users);
  setCurrentUser(target);
  renderAccountPanel();
}

function getStats() {
  try {
    const raw = localStorage.getItem(statsKey);
    return raw ? JSON.parse(raw) : { bestWpm: 0, totalAccuracy: 0, sessions: 0, lastResult: '--' };
  } catch (error) {
    return { bestWpm: 0, totalAccuracy: 0, sessions: 0, lastResult: '--' };
  }
}

function saveStats(result) {
  const stats = getStats();
  stats.bestWpm = Math.max(stats.bestWpm || 0, result.wpm || 0);
  stats.totalAccuracy = (stats.totalAccuracy || 0) + Number(result.accuracy || 0);
  stats.sessions = (stats.sessions || 0) + 1;
  stats.lastResult = `${result.wpm} WPM / ${result.accuracy}%`;

  localStorage.setItem(statsKey, JSON.stringify(stats));
  renderStats();
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getDailyBest() {
  try {
    const raw = localStorage.getItem(dailyBestKey);
    const data = raw ? JSON.parse(raw) : {};
    return data[getTodayKey()] || null;
  } catch (error) {
    return null;
  }
}

function saveDailyBest(result) {
  try {
    const raw = localStorage.getItem(dailyBestKey);
    const data = raw ? JSON.parse(raw) : {};
    const today = getTodayKey();
    const currentBest = data[today];

    if (!currentBest || result.wpm > currentBest.wpm || (result.wpm === currentBest.wpm && result.accuracy > currentBest.accuracy)) {
      data[today] = { wpm: result.wpm, accuracy: result.accuracy, date: today };
      localStorage.setItem(dailyBestKey, JSON.stringify(data));
    }
  } catch (error) {
    // Ignore storage issues gracefully.
  }

  renderStats();
}

function renderStats() {
  const stats = getStats();
  const avgAccuracy = stats.sessions ? Math.round(stats.totalAccuracy / stats.sessions) : 0;
  const dailyBest = getDailyBest();

  bestWpmValue.textContent = String(stats.bestWpm || 0);
  avgAccuracyValue.textContent = `${avgAccuracy}%`;
  sessionsValue.textContent = String(stats.sessions || 0);
  dailyBestValue.textContent = dailyBest ? `${dailyBest.wpm} WPM` : '--';
}

function updateProgress() {
  const progress = state.quote.length ? (typingInput.value.length / state.quote.length) * 100 : 0;
  const safeProgress = Math.min(100, Math.max(0, progress));
  progressFill.style.width = `${safeProgress}%`;
  progressValue.textContent = `${Math.round(safeProgress)}%`;
}

function setInputFeedback(isCorrect) {
  typingInput.classList.remove('flash-correct', 'flash-wrong');
  void typingInput.offsetWidth;
  typingInput.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');

  setTimeout(() => {
    typingInput.classList.remove('flash-correct', 'flash-wrong');
  }, 150);
}

function updateStats() {
  const typed = typingInput.value;
  const safeTyped = typed.slice(0, state.quote.length);
  const correctChars = [...safeTyped].filter((char, index) => state.quote[index] === char).length;
  const incorrectChars = Math.max(safeTyped.length - correctChars, 0);
  const accuracy = safeTyped.length ? ((correctChars / safeTyped.length) * 100).toFixed(1) : '100.0';
  const elapsedSeconds = Math.max(getChallengeConfig().seconds - state.timeLeft, 0);
  const minutes = Math.max(elapsedSeconds / 60, 1 / 60);
  const wpm = Math.max(0, Math.round((correctChars / 5) / minutes));

  if (state.challenge === 'cpu-battle') {
    state.battlePlayerProgress = Math.min(100, Math.max(0, (safeTyped.length / state.quote.length) * 100));
    state.battleCpuProgress = Math.min(100, 15 + (elapsedSeconds / Math.max(getChallengeConfig().seconds, 1)) * 100);
    updateBattleUi();
  }

  wpmValue.textContent = String(wpm);
  accuracyValue.textContent = `${accuracy}%`;
  charsValue.textContent = String(correctChars);
  updateProgress();

  const displayChars = [...state.quote].map((char, index) => {
    const inputChar = safeTyped[index];
    let className = '';

    if (inputChar == null) {
      className = index === safeTyped.length && !state.finished ? 'current' : '';
    } else if (inputChar === char) {
      className = 'correct';
    } else {
      className = 'incorrect';
    }

    return `<span class="${className}">${char}</span>`;
  });

  quoteEl.innerHTML = displayChars.join('');

  if (typed.length > state.lastTypedLength) {
    const lastChar = typed[typed.length - 1];
    const expectedChar = state.quote[typed.length - 1];
    const isCorrect = lastChar === expectedChar;
    playTone(isCorrect);
    setInputFeedback(isCorrect);
    state.lastTypedLength = typed.length;
  }

  if (safeTyped.length === state.quote.length && !state.finished) {
    finishTest();
  }

  if (safeTyped.length > 0 && !state.started && !state.finished) {
    startTimer();
  }

  if (incorrectChars > 0 && safeTyped.length > 0) {
    messageEl.textContent = 'Keep going — accuracy matters too.';
    messageEl.className = 'message error';
  } else if (safeTyped.length > 0) {
    messageEl.textContent = 'Nice rhythm. Stay steady.';
    messageEl.className = 'message success';
  } else {
    messageEl.textContent = 'Press start typing to begin.';
    messageEl.className = 'message';
  }
}

function computeScore() {
  const typed = typingInput.value.slice(0, state.quote.length);
  const correctChars = [...typed].filter((char, index) => state.quote[index] === char).length;
  const accuracy = typed.length ? ((correctChars / typed.length) * 100).toFixed(1) : '100.0';
  const elapsedSeconds = Math.max(getChallengeConfig().seconds - state.timeLeft, 1);
  const minutes = elapsedSeconds / 60 || 1 / 60;
  const wpm = Math.max(0, Math.round((correctChars / 5) / minutes));

  return { correctChars, accuracy: Number(accuracy), wpm };
}

function showSummary(result) {
  summaryWpm.textContent = String(result.wpm);
  summaryAccuracy.textContent = `${result.accuracy}%`;
  summaryMode.textContent = state.mode;
  summaryChallenge.textContent = getChallengeConfig().label;
  summaryNote.textContent = result.accuracy >= 95
    ? 'Excellent control and consistency.'
    : result.accuracy >= 80
      ? 'Solid run — a little more accuracy will push you higher.'
      : 'Good effort. Focus on cleaner keystrokes next time.';
  summaryModal.classList.remove('hidden');
}

function finishTest() {
  if (state.finished) return;

  state.finished = true;
  clearInterval(state.timerId);
  typingInput.blur();
  const result = computeScore();
  saveStats(result);
  saveDailyBest(result);
  saveHistory(result);
  updateUserStats(result);
  showSummary(result);
  playTone(true);

  messageEl.textContent = `Finished! Final score: ${result.wpm} WPM with ${result.accuracy}% accuracy.`;
  messageEl.className = 'message success';
}

function startTimer() {
  if (state.started) return;
  state.started = true;

  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    timeValue.textContent = String(Math.max(state.timeLeft, 0));

    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      finishAtTimeout();
    }
  }, 1000);
}

function finishAtTimeout() {
  if (state.finished) return;

  state.finished = true;
  typingInput.blur();
  const result = computeScore();
  saveStats(result);
  saveDailyBest(result);
  saveHistory(result);
  updateUserStats(result);
  showSummary(result);
  playTone(false);

  messageEl.textContent = `Time is up! Final score: ${result.wpm} WPM with ${result.accuracy}% accuracy.`;
  messageEl.className = 'message error';
}

function resetTest() {
  clearInterval(state.timerId);
  state.timeLeft = getChallengeConfig().seconds;
  state.started = false;
  state.finished = false;
  state.lastTypedLength = 0;
  state.summaryShown = false;
  state.battleCpuProgress = 0;
  state.battlePlayerProgress = 0;
  summaryModal.classList.add('hidden');
  typingInput.value = '';
  timeValue.textContent = String(state.timeLeft);
  wpmValue.textContent = '0';
  accuracyValue.textContent = '100%';
  charsValue.textContent = '0';
  progressFill.style.width = '0%';
  progressValue.textContent = '0%';
  battleStatus.textContent = 'Waiting for launch';
  messageEl.textContent = 'Press start typing to begin.';
  messageEl.className = 'message';
  buildQuote();
  updateBattleUi();
  typingInput.focus();
}

function playTone(isCorrect) {
  if (!state.soundOn) return;

  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;

  if (!window.__typingAudioCtx) {
    window.__typingAudioCtx = new AudioCtor();
  }

  const context = window.__typingAudioCtx;
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = isCorrect ? 'triangle' : 'sawtooth';
  oscillator.frequency.value = isCorrect ? 620 : 180;
  gainNode.gain.value = 0.04;

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.start();
  oscillator.stop(context.currentTime + 0.08);
}

function getLeaderboard() {
  try {
    const raw = localStorage.getItem(leaderboardKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function adminResetLeaderboard() {
  localStorage.setItem(leaderboardKey, JSON.stringify([]));
  renderLeaderboard();
  messageEl.textContent = 'Leaderboard reset by admin.';
  messageEl.className = 'message success';
}

function adminResetStats() {
  localStorage.setItem(statsKey, JSON.stringify({ bestWpm: 0, totalAccuracy: 0, sessions: 0, lastResult: '--' }));
  localStorage.setItem(historyKey, JSON.stringify([]));
  localStorage.setItem(dailyBestKey, JSON.stringify({}));
  renderStats();
  renderHistory();
  renderWeeklyChart();
  messageEl.textContent = 'Stats and history reset by admin.';
  messageEl.className = 'message success';
}

function adminBoostStreak() {
  const user = getCurrentUser();
  if (!user) return;

  const users = getUsers();
  const target = users.find((entry) => normalizeUsername(entry.username) === normalizeUsername(user.username));
  if (!target) return;

  target.streakDays = (target.streakDays || 0) + 3;
  saveUsers(users);
  setCurrentUser(target);
  renderAccountPanel();
  messageEl.textContent = 'Streak boosted for Daniel.';
  messageEl.className = 'message success';
}

function saveLeaderboard(entries) {
  localStorage.setItem(leaderboardKey, JSON.stringify(entries));
}

function getHistory() {
  try {
    const raw = localStorage.getItem(historyKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveHistory(result) {
  const item = {
    dateKey: new Date().toISOString().slice(0, 10),
    displayDate: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    mode: state.mode,
    challenge: state.challenge,
    wpm: result.wpm,
    accuracy: result.accuracy
  };

  const history = getHistory();
  history.unshift(item);
  localStorage.setItem(historyKey, JSON.stringify(history.slice(0, 8)));
  renderHistory();
  renderWeeklyChart();
}

function renderHistory() {
  const history = getHistory().slice(0, 5);

  historyList.innerHTML = history.length
    ? history.map((entry) => `
      <li>
        <div class="history-meta">
          <strong>${entry.challenge}</strong>
          <span>${entry.mode} • ${entry.displayDate || entry.dateKey}</span>
        </div>
        <span class="history-score">${entry.wpm} WPM</span>
      </li>
    `).join('')
    : '<li class="empty">No sessions yet. Finish a run to start building history.</li>';
}

function renderWeeklyChart() {
  const history = getHistory();
  const days = [];
  const date = new Date();

  for (let i = 6; i >= 0; i -= 1) {
    const current = new Date(date);
    current.setDate(date.getDate() - i);
    const key = current.toISOString().slice(0, 10);
    const related = history.filter((entry) => entry.dateKey === key);

    const best = related.reduce((max, entry) => Math.max(max, entry.wpm || 0), 0);
    days.push({
      label: current.toLocaleDateString(undefined, { weekday: 'short' }),
      value: best,
      total: related.length
    });
  }

  const maxValue = Math.max(...days.map((day) => day.value), 1);

  weeklyChart.innerHTML = days.map((day) => {
    const height = day.value ? Math.max(12, (day.value / maxValue) * 100) : 8;
    const label = day.value ? `${day.value}` : '';

    return `
      <div class="chart-day">
        <div class="chart-bar" style="height:${height}%">${label}</div>
        <small>${day.label}</small>
      </div>
    `;
  }).join('');
}

function renderLeaderboard() {
  const lead = getLeaderboard()
    .sort((a, b) => b.wpm - a.wpm || b.accuracy - a.accuracy)
    .slice(0, 5);

  leaderboardList.innerHTML = lead.length
    ? lead.map((entry, index) => `
      <li>
        <span>#${index + 1}</span>
        <strong>${entry.name}</strong>
        <span>${entry.mode}</span>
        <span>${entry.wpm} WPM</span>
        <span>${entry.accuracy}%</span>
      </li>
    `).join('')
    : '<li class="empty">No scores yet. Finish a run to add one.</li>';
}

function saveScore() {
  if (!typingInput.value.trim()) {
    messageEl.textContent = 'Type something before saving your score.';
    messageEl.className = 'message error';
    return;
  }

  const score = computeScore();
  const entry = {
    name: (playerName.value || 'Player').trim().slice(0, 18) || 'Player',
    mode: state.mode,
    challenge: state.challenge,
    wpm: score.wpm,
    accuracy: score.accuracy
  };

  const current = getLeaderboard();
  current.push(entry);
  const topScores = current
    .sort((a, b) => b.wpm - a.wpm || b.accuracy - a.accuracy)
    .slice(0, 5);

  saveLeaderboard(topScores);
  renderLeaderboard();

  messageEl.textContent = `Saved: ${entry.name} reached ${entry.wpm} WPM at ${entry.accuracy}% accuracy.`;
  messageEl.className = 'message success';
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      fullscreenBtn.textContent = 'Exit Fullscreen';
    } else {
      await document.exitFullscreen();
      fullscreenBtn.textContent = 'Fullscreen';
    }
  } catch (error) {
    messageEl.textContent = 'Fullscreen is not available in this browser.';
    messageEl.className = 'message error';
  }
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  soundBtn.textContent = `Sound: ${state.soundOn ? 'On' : 'Off'}`;
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
}

function applyCustomText() {
  const text = customTextInput.value.trim();

  if (!text) {
    messageEl.textContent = 'Add custom text before using it.';
    messageEl.className = 'message error';
    return;
  }

  state.mode = 'custom';
  state.customText = text;
  modeSelect.value = 'sentences';
  resetTest();
}

function useRandomQuote() {
  state.mode = 'sentences';
  state.customText = '';
  modeSelect.value = 'sentences';
  resetTest();
}

modeSelect.addEventListener('change', (event) => {
  state.mode = event.target.value;
  resetTest();
});

function updateModeFromChallenge() {
  state.battleIsActive = state.challenge === 'cpu-battle';
  battlePanel.classList.toggle('hidden', !state.battleIsActive);

  if (state.challenge === 'sprint30') {
    state.mode = 'words';
    modeSelect.value = 'words';
  } else if (state.challenge === 'precision45') {
    state.mode = 'numbers';
    modeSelect.value = 'numbers';
  } else if (state.challenge === 'daily') {
    state.mode = 'sentences';
    modeSelect.value = 'sentences';
    state.drill = 'all';
    drillSelect.value = 'all';
  } else if (state.challenge === 'cpu-battle') {
    state.mode = 'sentences';
    modeSelect.value = 'sentences';
  } else {
    state.mode = 'sentences';
    modeSelect.value = 'sentences';
  }
}

function generateBattleQuote() {
  const prompts = [
    'The CPU is moving fast, but your rhythm can still win the race.',
    'Keep a calm pace and outtype the machine with smooth, accurate strokes.',
    'Battle mode rewards consistency, focus, and clean movement across the keyboard.',
    'Stay steady and trusted patterns will beat a noisy, reckless rush.'
  ];

  return prompts[Math.floor(Math.random() * prompts.length)];
}

function updateBattleUi() {
  const playerWidth = Math.max(0, Math.min(100, state.battlePlayerProgress));
  const cpuWidth = Math.max(0, Math.min(100, state.battleCpuProgress));
  playerBattleProgress.style.width = `${playerWidth}%`;
  cpuBattleProgress.style.width = `${cpuWidth}%`;

  if (state.battleIsActive) {
    battleStatus.textContent = state.battleCpuProgress >= 100
      ? 'CPU won this round'
      : state.battlePlayerProgress >= 100
        ? 'You won the battle'
        : 'Race in progress';
  } else {
    battleStatus.textContent = 'Waiting for launch';
  }
}

challengeSelect.addEventListener('change', (event) => {
  state.challenge = event.target.value;
  updateModeFromChallenge();
  resetTest();
});

challengeSelect.innerHTML = `
  <option value="sprint30">Sprint 30s</option>
  <option value="classic60" selected>Classic 60s</option>
  <option value="precision45">Precision 45s</option>
  <option value="daily">Daily challenge</option>
  <option value="cpu-battle">CPU battle</option>
`;

difficultySelect.addEventListener('change', (event) => {
  state.difficulty = event.target.value;
  resetTest();
});

drillSelect.addEventListener('change', (event) => {
  state.drill = event.target.value;
  resetTest();
});

themeSelect.addEventListener('change', (event) => {
  setTheme(event.target.value);
});

showLoginBtn.addEventListener('click', () => {
  setAuthMode('login');
});
showSignupBtn.addEventListener('click', () => {
  setAuthMode('signup');
});
loginForm.addEventListener('submit', handleLogin);
signupForm.addEventListener('submit', handleSignup);
signupUsername.addEventListener('input', updateSignupUsernameHint);
profileUsernameInput.addEventListener('input', updateProfileUsernameHint);
logoutBtn.addEventListener('click', logoutUser);
mainLogoutBtn.addEventListener('click', logoutUser);
mainEditProfileBtn.addEventListener('click', openProfileEditor);
editProfileBtn.addEventListener('click', openProfileEditor);
saveProfileBtn.addEventListener('click', saveProfileChanges);
cancelProfileBtn.addEventListener('click', closeProfileEditor);

restartBtn.addEventListener('click', resetTest);
typingInput.addEventListener('input', updateStats);
useCustomTextBtn.addEventListener('click', applyCustomText);
randomQuoteBtn.addEventListener('click', useRandomQuote);
soundBtn.addEventListener('click', toggleSound);
fullscreenBtn.addEventListener('click', toggleFullscreen);
adminResetLeaderboardBtn.addEventListener('click', adminResetLeaderboard);
adminResetStatsBtn.addEventListener('click', adminResetStats);
adminStreakBoostBtn.addEventListener('click', adminBoostStreak);
saveScoreBtn.addEventListener('click', saveScore);
dailyChallengeBtn.addEventListener('click', () => {
  state.challenge = 'daily';
  challengeSelect.value = 'daily';
  updateModeFromChallenge();
  resetTest();
});

document.addEventListener('fullscreenchange', () => {
  fullscreenBtn.textContent = document.fullscreenElement ? 'Exit Fullscreen' : 'Fullscreen';
});

closeSummaryBtn.addEventListener('click', () => {
  summaryModal.classList.add('hidden');
});

summaryModal.addEventListener('click', (event) => {
  if (event.target === summaryModal) {
    summaryModal.classList.add('hidden');
  }
});

migrateLegacyUsers();
ensureDanielAccount();
setTheme('midnight');
setAuthMode('login');
updateModeFromChallenge();
renderHistory();
renderWeeklyChart();
renderLeaderboard();
renderStats();
renderAccountPanel();
resetTest();
