// APPLICATION STATE WITH SCREENSHOT DATA
let state = {
  restaurantSettings: {
    name: "Serviq",
    tagline: "Order anytime",
    currency: "₹",
    tablesCount: 5,
    taxRate: 0.025, // 2.5% CGST + 2.5% SGST = 5% total tax
    serviceChargeRate: 0.00
  },
  
  menu: [
    {
      id: "menu-1",
      name: "Paneer Tikka",
      category: "Starters",
      price: 180,
      desc: "Marinated cottage cheese cubes grilled in charcoal tandoor with onions and bell peppers.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: false
    },
    {
      id: "menu-2",
      name: "Chicken Biryani",
      category: "Rice Meals",
      price: 320,
      desc: "Fragrant basmati rice layered with juicy spiced chicken, saffron, and fresh mint.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: false,
      bestseller: true
    },
    {
      id: "menu-3",
      name: "Masala Dosa",
      category: "Tiffin",
      price: 120,
      desc: "Thin crispy rice crepe filled with spiced potato mash. Served with sambar and coconut chutney.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: true
    },
    {
      id: "menu-4",
      name: "Dal Makhani",
      category: "Rice Meals",
      price: 160,
      desc: "Creamy slow-cooked black lentils simmered overnight with butter, cream, and tomatoes.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: false
    },
    {
      id: "menu-full-meals",
      name: "Full Meals",
      category: "Rice Meals",
      price: 120,
      desc: "Rice, sambar, rasam, 3 curries, papad, pickle & payasam",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: true
    },
    {
      id: "menu-mini-meals",
      name: "Mini Meals",
      category: "Rice Meals",
      price: 90,
      desc: "Rice, sambar, 1 curry, papad & pickle",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: false
    },
    {
      id: "menu-5",
      name: "Gulab Jamun",
      category: "Desserts",
      price: 80,
      desc: "Golden fried milk-solid dumplings dipped in warm cardamom-scented sugar syrup.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: false
    },
    {
      id: "menu-6",
      name: "Masala Chai",
      category: "Drinks",
      price: 40,
      desc: "Traditional brewed black tea infused with cardamom, ginger, cloves, and milk.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: false
    },
    {
      id: "menu-7",
      name: "Butter Naan",
      category: "Rotis",
      price: 40,
      desc: "Soft leavened tandoori flatbread brushed with generous butter.",
      image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: false
    },
    {
      id: "menu-8",
      name: "Lassi",
      category: "Drinks",
      price: 60,
      desc: "Chilled yogurt beverage blended sweet with cardamom and rose water.",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=60",
      available: true,
      veg: true,
      bestseller: false
    }
  ],
  
  orders: [
    {
      id: "847",
      table: "03",
      time: "1:28 PM",
      timeAgo: "2 min ago",
      items: [
        { name: "Chicken Biryani", qty: 1, price: 320 },
        { name: "Masala Chai", qty: 2, price: 40 }
      ],
      notes: "Less spicy please",
      subtotal: 400,
      tax: 10,
      charge: 0,
      total: 420,
      status: "new", // new, preparing, ready, done
      billingStatus: "unpaid"
    },
    {
      id: "846",
      table: "07",
      time: "1:22 PM",
      timeAgo: "8 min ago",
      items: [
        { name: "Paneer Tikka", qty: 2, price: 180 },
        { name: "Butter Naan", qty: 3, price: 40 },
        { name: "Lassi", qty: 1, price: 60 }
      ],
      notes: "",
      subtotal: 540,
      tax: 27,
      charge: 0,
      total: 567,
      status: "preparing", // new, preparing, ready, done
      billingStatus: "unpaid"
    },
    {
      id: "845",
      table: "01",
      time: "1:15 PM",
      timeAgo: "15 min ago",
      items: [
        { name: "Masala Dosa", qty: 3, price: 120 },
        { name: "Filter Coffee", qty: 2, price: 40 }
      ],
      notes: "Allergy: peanuts",
      subtotal: 440,
      tax: 22,
      charge: 0,
      total: 462,
      status: "preparing",
      billingStatus: "unpaid"
    },
    {
      id: "844",
      table: "05",
      time: "1:08 PM",
      timeAgo: "22 min ago",
      items: [
        { name: "Paneer Tikka", qty: 2, price: 180 },
        { name: "Chicken Biryani", qty: 1, price: 320 },
        { name: "Butter Naan", qty: 3, price: 40 },
        { name: "Masala Chai", qty: 2, price: 40 }
      ],
      notes: "",
      subtotal: 880,
      tax: 44, // CGST (22) + SGST (22)
      charge: 0,
      total: 924,
      status: "ready",
      billingStatus: "unpaid"
    },
    {
      id: "843",
      table: "02",
      time: "1:00 PM",
      timeAgo: "30 min ago",
      items: [
        { name: "Veg Thali", qty: 2, price: 120 },
        { name: "Masala Chai", qty: 3, price: 40 }
      ],
      notes: "",
      subtotal: 360,
      tax: 18,
      charge: 0,
      total: 378,
      status: "done",
      billingStatus: "paid"
    }
  ],

  tables: [
    { id: "T-01", status: "Occupied", seats: 4 },
    { id: "T-02", status: "Occupied", seats: 2 },
    { id: "T-03", status: "Occupied", seats: 4 },
    { id: "T-04", status: "Free", seats: 6 },
    { id: "T-05", status: "Occupied", seats: 2 }
  ],
  
  billingData: [
    { table: "Table 01", orders: 2, total: 756, status: "Unpaid" },
    { table: "Table 02", orders: 3, total: 1240, status: "Unpaid" },
    { table: "Table 03", orders: 1, total: 320, status: "Paid" },
    { table: "Table 05", orders: 2, total: 924, status: "Unpaid" }, // Match ₹924 exactly from breakdown
    { table: "Table 07", orders: 4, total: 2100, status: "Partial" }
  ],
  
  activeBillingTable: "Table 05",
  activeIncomingFilter: "New",
  activeMenuCategory: "All Items",
  editingMenuItemId: null,
  selectedTableId: "T-01",
  qrCustomizer: {
    color: "#ff7a00",
    showLogo: true
  },

  cart: [],
  activeCustomerOrder: null,
  activeCustomerTable: "05" // Default to Table 05 to match screenshot
};

// DOM SELECTIONS
const loginView = document.getElementById("login-view");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const dashboardView = document.getElementById("dashboard-view");
const sidebarItems = document.querySelectorAll(".sidebar-item");
const activePanelTitle = document.getElementById("active-panel-title");
const panelViews = document.querySelectorAll(".panel-view");

const toggleSimulatorBtn = document.getElementById("toggle-simulator-btn");
const simulatorPanel = document.getElementById("simulator-panel");
const closeSimulatorBtn = document.getElementById("close-simulator-btn");
const logoutBtn = document.getElementById("logout-btn");

// BOOTSTRAP INITIAL SETUP
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  setupEventListeners();
  populateSaaSTableDropdowns();
  populateDiningTablesSelectDropdown();
  
  // Render main widgets
  renderDashboardOverview();
  renderIncomingOrders();
  renderMenuManagement();
  renderBillingPanel();
  renderTablesPage();
  
  // Highlight default sidebar submenu filter
  switchSubmenuFilter(state.activeIncomingFilter);
  
  const selectSim = document.getElementById("cust-select-table-sim");
  if (selectSim) {
    selectSim.value = "05";
  }
  state.activeCustomerTable = "05";
  updateSimulatorTableLabels();
}

// ROUTING / TAB STATE MANAGEMENT
function switchTab(tabId) {
  sidebarItems.forEach(item => {
    if (item.getAttribute("data-tab") === tabId) {
      item.classList.add("active");
      if (item.classList.contains("has-submenu")) {
        item.classList.add("expanded");
      }
    } else {
      item.classList.remove("active");
      if (item.classList.contains("has-submenu")) {
        item.classList.remove("expanded");
      }
    }
  });

  document.querySelectorAll(".panel-view").forEach(panel => {
    panel.classList.remove("active");
  });

  const targetPanel = document.getElementById(`panel-${tabId}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }

  // Format header titles matching user screens
  const titles = {
    overview: "Dashboard",
    orders: "Incoming Orders",
    menu: "Menu Management",
    billing: "Billing Panel",
    saas: "Tables & QR Management",
    settings: "Settings"
  };
  activePanelTitle.textContent = titles[tabId] || "Dashboard";

  if (tabId === "settings") {
    renderSettingsPanel();
  } else if (tabId === "saas") {
    renderTablesPage();
  }
}

function switchSubmenuFilter(filter) {
  state.activeIncomingFilter = filter;
  
  // Highlight active submenu item
  document.querySelectorAll(".submenu-item").forEach(sub => {
    if (sub.getAttribute("data-filter") === filter) {
      sub.classList.add("active");
    } else {
      sub.classList.remove("active");
    }
  });

  renderIncomingOrders();
}

// EVENT LISTENERS
function setupEventListeners() {
  // Login flow
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    
    if (email === "admin@restaurant.com" || email === "admin@serviq.com") {
      loginView.style.display = "none";
      dashboardView.style.display = "flex";
      loginError.style.display = "none";
      
      // Seed default restaurant details inside profile header
      document.getElementById("profile-restaurant-name").textContent = state.restaurantSettings.name;
      document.getElementById("avatar-letter").textContent = state.restaurantSettings.name.charAt(0).toUpperCase();
      document.getElementById("profile-user-email").textContent = email;
      
      renderDashboardOverview();
    } else {
      loginError.style.display = "block";
    }
  });

  // Toggle Password Visibility
  const togglePasswordBtn = document.getElementById("toggle-password-btn");
  const loginPasswordInput = document.getElementById("login-password");
  if (togglePasswordBtn && loginPasswordInput) {
    togglePasswordBtn.addEventListener("click", () => {
      if (loginPasswordInput.type === "password") {
        loginPasswordInput.type = "text";
        togglePasswordBtn.textContent = "🙈";
      } else {
        loginPasswordInput.type = "password";
        togglePasswordBtn.textContent = "👁️";
      }
    });
  }

  // Logout Flow
  logoutBtn.addEventListener("click", () => {
    dashboardView.style.display = "none";
    loginView.style.display = "flex";
    document.getElementById("login-password").value = "";
  });

  // Sidebar Tabs
  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");
      
      if (item.classList.contains("has-submenu")) {
        if (item.classList.contains("active")) {
          item.classList.toggle("expanded");
          return;
        }
      }
      
      switchTab(tabId);
    });
  });

  // Sidebar Submenu Filters
  document.querySelectorAll(".submenu-item").forEach(subItem => {
    subItem.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const filter = subItem.getAttribute("data-filter");
      switchTab("orders");
      switchSubmenuFilter(filter);
    });
  });

  // Simulator Toggle
  toggleSimulatorBtn.addEventListener("click", () => {
    simulatorPanel.classList.toggle("collapsed");
    renderCustomerMenu();
  });

  closeSimulatorBtn.addEventListener("click", () => {
    simulatorPanel.classList.add("collapsed");
  });

  // Menu Search
  document.getElementById("menu-search-input").addEventListener("input", (e) => {
    renderMenuList(e.target.value.trim());
  });

  // Category left menu selector click handler
  document.getElementById("menu-categories-list").addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) {
      document.querySelectorAll("#menu-categories-list li").forEach(item => item.classList.remove("active"));
      li.classList.add("active");
      state.activeMenuCategory = li.getAttribute("data-cat");
      renderMenuList();
    }
  });

  // Menu right pane Cancel button
  document.getElementById("menu-cancel-btn").addEventListener("click", () => {
    resetMenuEditForm();
  });

  // Menu right pane Save Changes form handler
  document.getElementById("menu-edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const itemId = document.getElementById("edit-item-id").value;
    const name = document.getElementById("edit-input-name").value;
    const desc = document.getElementById("edit-input-desc").value;
    const price = parseFloat(document.getElementById("edit-input-price").value);
    const category = document.getElementById("edit-input-category").value;

    const index = state.menu.findIndex(item => item.id === itemId);
    if (index !== -1) {
      state.menu[index] = { ...state.menu[index], name, desc, price, category };
      alert("Menu item changes saved successfully.");
      resetMenuEditForm();
      renderMenuList();
      renderCustomerMenu();
    } else {
      // Create new if ID not present (Add mode)
      const newDish = {
        id: "menu-" + Date.now(),
        name,
        category,
        price,
        desc,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        available: true
      };
      state.menu.push(newDish);
      alert("New menu dish successfully created.");
      resetMenuEditForm();
      renderMenuList();
      renderCustomerMenu();
    }
  });

  // Add Item top right action button
  document.getElementById("add-menu-item-btn").addEventListener("click", () => {
    document.getElementById("menu-form-title").textContent = "Add New Item";
    document.getElementById("edit-item-id").value = "";
    document.getElementById("edit-input-name").value = "";
    document.getElementById("edit-input-desc").value = "";
    document.getElementById("edit-input-price").value = "";
    document.getElementById("edit-input-category").value = "Mains";
    document.getElementById("edit-image-placeholder-label").textContent = "No Image Selected";
  });


  // Billing list selection click handler
  document.getElementById("billing-tables-list").addEventListener("click", (e) => {
    const row = e.target.closest(".table-selection-row");
    if (row) {
      document.querySelectorAll(".table-selection-row").forEach(r => r.classList.remove("active"));
      row.classList.add("active");
      state.activeBillingTable = row.getAttribute("data-table");
      renderBillingSummary();
    }
  });

  // Mark as Paid button
  document.getElementById("bill-pay-btn").addEventListener("click", () => {
    const tableId = state.activeBillingTable;
    const index = state.billingData.findIndex(item => item.table === tableId);
    
    if (index !== -1) {
      state.billingData[index].status = "Paid";
      
      // Update order status in orders array
      const rawNum = tableId.replace("Table ", "");
      state.orders.forEach((ord, idx) => {
        if (ord.table === rawNum || parseInt(ord.table) === parseInt(rawNum)) {
          state.orders[idx].billingStatus = "paid";
          state.orders[idx].status = "done";
        }
      });

      // Free the table status
      const cleanTableId = rawNum.length === 1 ? `T-0${rawNum}` : `T-${rawNum}`;
      const tableIdx = state.tables.findIndex(t => t.id === cleanTableId);
      if (tableIdx !== -1) {
        state.tables[tableIdx].status = "Free";
      }

      alert(`Payment complete for ${tableId}. Table status set to Available.`);
      
      renderBillingPanel();
      renderDashboardOverview();
      renderIncomingOrders();
      renderTablesPage();
    }
  });

  // CUSTOMER SIMULATOR ACTIONS
  document.getElementById("cust-select-table-sim").addEventListener("change", (e) => {
    state.activeCustomerTable = e.target.value;
    updateSimulatorTableLabels();
  });

  document.getElementById("cust-start-btn").addEventListener("click", () => {
    switchCustomerScreen("menu");
    renderCustomerMenu();
  });

  document.getElementById("cust-menu-search-input").addEventListener("input", (e) => {
    renderCustomerMenu(null, e.target.value.trim());
  });

  document.getElementById("qty-minus").addEventListener("click", () => {
    let qtyVal = parseInt(document.getElementById("qty-value").textContent, 10);
    if (qtyVal > 1) {
      qtyVal--;
      document.getElementById("qty-value").textContent = qtyVal;
      updateCustomerItemModalPrice(qtyVal);
    }
  });

  document.getElementById("qty-plus").addEventListener("click", () => {
    let qtyVal = parseInt(document.getElementById("qty-value").textContent, 10);
    qtyVal++;
    document.getElementById("qty-value").textContent = qtyVal;
    updateCustomerItemModalPrice(qtyVal);
  });

  document.getElementById("cust-modal-close").addEventListener("click", () => {
    document.getElementById("cust-item-modal").style.display = "none";
  });

  document.getElementById("cust-view-cart-btn").addEventListener("click", () => {
    switchCustomerScreen("cart");
    renderCustomerCart();
  });

  const headerCartBtn = document.getElementById("cust-header-cart-btn");
  if (headerCartBtn) {
    headerCartBtn.addEventListener("click", () => {
      switchCustomerScreen("cart");
      renderCustomerCart();
    });
  }

  document.getElementById("cust-cart-back-btn").addEventListener("click", () => {
    switchCustomerScreen("menu");
  });

  document.getElementById("cust-place-order-btn").addEventListener("click", () => {
    if (state.cart.length === 0) return;
    
    // Construct Order
    const randomIdNum = Math.floor(800 + Math.random() * 100);
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    let subtotal = 0;
    const orderItems = state.cart.map(cartItem => {
      subtotal += cartItem.price * cartItem.quantity;
      return {
        name: cartItem.name,
        qty: cartItem.quantity,
        price: cartItem.price
      };
    });

    const tax = parseFloat((subtotal * 0.05).toFixed(2)); // 5% GST
    const total = parseFloat((subtotal + tax).toFixed(2));
    const notes = document.getElementById("cust-order-notes").value.trim();

    const newOrder = {
      id: `${randomIdNum}`,
      table: state.activeCustomerTable,
      time: timeNow,
      timeAgo: "1 min ago",
      items: orderItems,
      notes: notes,
      subtotal: subtotal,
      tax: tax,
      charge: 0,
      total: total,
      status: "new",
      billingStatus: "unpaid"
    };

    // Add to state and save
    state.orders.push(newOrder);
    state.activeCustomerOrder = newOrder;

    // Set table as occupied in state.tables
    const tableToSet = state.activeCustomerTable.length === 1 ? `T-0${state.activeCustomerTable}` : `T-${state.activeCustomerTable}`;
    const tableIdx = state.tables.findIndex(t => t.id === tableToSet);
    if (tableIdx !== -1) {
      state.tables[tableIdx].status = "Occupied";
    }

    // Check if table entry exists in billing
    const cleanTableLabel = `Table ${state.activeCustomerTable}`;
    const bIndex = state.billingData.findIndex(b => b.table === cleanTableLabel);
    if (bIndex !== -1) {
      state.billingData[bIndex].orders += 1;
      state.billingData[bIndex].total += total;
      state.billingData[bIndex].status = "Unpaid";
    } else {
      state.billingData.push({
        table: cleanTableLabel,
        orders: 1,
        total: total,
        status: "Unpaid"
      });
    }

    // Reset customer cart
    state.cart = [];
    document.getElementById("cust-order-notes").value = "";

    // Show indicator on sidebar
    document.getElementById("live-orders-badge").style.display = "inline-block";

    // Shift to tracking page
    switchCustomerScreen("confirm");
    renderCustomerTrackingScreen();

    // Re-render admin panels
    renderDashboardOverview();
    renderIncomingOrders();
    renderBillingPanel();
    renderTablesPage();
  });

  document.getElementById("cust-order-more-btn").addEventListener("click", () => {
    switchCustomerScreen("menu");
    renderCustomerMenu();
  });

  document.getElementById("cust-modal-add-btn").addEventListener("click", () => {
    if (!modalItemTemp) return;

    const qty = parseInt(document.getElementById("qty-value").textContent, 10);
    const notes = document.getElementById("cust-modal-notes").value.trim();

    const existingCartIndex = state.cart.findIndex(cartItem => cartItem.id === modalItemTemp.id && cartItem.notes === notes);
    if (existingCartIndex !== -1) {
      state.cart[existingCartIndex].quantity += qty;
    } else {
      state.cart.push({
        id: modalItemTemp.id,
        name: modalItemTemp.name,
        price: modalItemTemp.price,
        quantity: qty,
        notes: notes
      });
    }

    document.getElementById("cust-item-modal").style.display = "none";
    updateCustomerCartBarSticky();
    modalItemTemp = null;
  });

  // --- SETTINGS EVENT LISTENERS ---
  // Live Preview changes
  const inputsToPreview = ["settings-name", "settings-tables", "settings-tax", "settings-service", "settings-currency"];
  inputsToPreview.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateSettingsPreview);
      el.addEventListener("change", updateSettingsPreview);
    }
  });

  // Settings Reset Button click
  const resetBtn = document.getElementById("settings-reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      renderSettingsPanel();
      alert("Settings reset to currently saved configuration.");
    });
  }

  // Accent Color Theme dots click handler
  const themeDots = document.querySelectorAll(".theme-dot");
  themeDots.forEach(dot => {
    dot.addEventListener("click", () => {
      themeDots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  // Settings Save Button click handler
  const saveBtn = document.getElementById("settings-save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("settings-name").value.trim();
      const tagline = document.getElementById("settings-tagline").value.trim();
      const currency = document.getElementById("settings-currency").value;
      const tablesCount = parseInt(document.getElementById("settings-tables").value, 10);
      const taxRatePercent = parseFloat(document.getElementById("settings-tax").value);
      const serviceRatePercent = parseFloat(document.getElementById("settings-service").value);
      
      if (!name) {
        alert("Please enter a valid restaurant name.");
        return;
      }
      if (isNaN(tablesCount) || tablesCount < 1 || tablesCount > 15) {
        alert("Please enter a tables count between 1 and 15.");
        return;
      }
      if (isNaN(taxRatePercent) || taxRatePercent < 0 || taxRatePercent > 30) {
        alert("Please enter a tax rate between 0% and 30%.");
        return;
      }
      if (isNaN(serviceRatePercent) || serviceRatePercent < 0 || serviceRatePercent > 25) {
        alert("Please enter a service charge rate between 0% and 25%.");
        return;
      }
      
      // Update state settings
      state.restaurantSettings.name = name;
      state.restaurantSettings.tagline = tagline;
      state.restaurantSettings.currency = currency;
      state.restaurantSettings.taxRate = (taxRatePercent / 100) / 2; // Split into CGST and SGST
      state.restaurantSettings.serviceChargeRate = serviceRatePercent / 100;
      
      // Dynamic Table Count Update (Regenerate tables array in state)
      const oldTablesCount = state.restaurantSettings.tablesCount;
      state.restaurantSettings.tablesCount = tablesCount;
      
      if (tablesCount > state.tables.length) {
        for (let i = state.tables.length + 1; i <= tablesCount; i++) {
          const displayId = i < 10 ? `0${i}` : i;
          state.tables.push({ id: `T-${displayId}`, status: "Free" });
        }
      } else if (tablesCount < state.tables.length) {
        state.tables = state.tables.slice(0, tablesCount);
      }
      
      // Re-populate all dining table dropdowns across panels
      populateSaaSTableDropdowns();
      populateDiningTablesSelectDropdown();
      
      // Update restaurant name in headers and sidebar profile:
      document.getElementById("profile-restaurant-name").textContent = name;
      document.getElementById("avatar-letter").textContent = name.charAt(0).toUpperCase();
      
      // Update customer simulator welcome panel text if present:
      const custHeader = document.getElementById("cust-restaurant-name");
      if (custHeader) custHeader.textContent = name;
      const custTagline = document.getElementById("cust-restaurant-tagline");
      if (custTagline) custTagline.textContent = tagline;
      
      // Dark Mode toggle
      const darkToggle = document.getElementById("settings-darkmode");
      if (darkToggle) {
        if (darkToggle.checked) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
      }
      
      // Accent Color saving
      const activeColorDot = document.querySelector(".theme-dot.active");
      if (activeColorDot) {
        const chosenColor = activeColorDot.getAttribute("data-color");
        document.documentElement.style.setProperty('--primary', chosenColor);
        document.documentElement.style.setProperty('--primary-light', chosenColor + "15");
      }
      
      // Re-render and refresh views
      renderDashboardOverview();
      renderIncomingOrders();
      renderBillingPanel();
      
      alert("Settings successfully saved and applied!");
    });
  }

  // Dining Tables & QR select page change event listener
  const saasTableSelect = document.getElementById("saas-table-select-page");
  if (saasTableSelect) {
    saasTableSelect.addEventListener("change", (e) => {
      const selectedIndex = parseInt(e.target.value, 10);
      const displayIndex = selectedIndex < 10 ? `0${selectedIndex}` : selectedIndex;
      const displayLabel = `Table T-${displayIndex}`;
      
      const labelDisp = document.getElementById("saas-table-label-display");
      if (labelDisp) {
        labelDisp.textContent = displayLabel;
      }
      
      // Update QR link subtitle text
      const nextSibling = labelDisp ? labelDisp.nextElementSibling : null;
      if (nextSibling) {
        nextSibling.textContent = `http://localhost:3000/menu?table=T-${displayIndex}`;
      }
    });
  }

  // --- NEW TABLES DASHBOARD EVENT LISTENERS ---
  const addTableBtn = document.getElementById("add-table-btn");
  const addTableModal = document.getElementById("add-table-modal");
  const closeAddTableModal = document.getElementById("close-add-table-modal");
  
  if (addTableBtn && addTableModal) {
    addTableBtn.addEventListener("click", () => {
      addTableModal.style.display = "flex";
      // Auto suggest ID
      const nextNum = state.tables.length + 1;
      const displayNum = nextNum < 10 ? `0${nextNum}` : nextNum;
      document.getElementById("new-table-id").value = `T-${displayNum}`;
      document.getElementById("new-table-seats").value = "4";
    });
  }
  
  if (closeAddTableModal && addTableModal) {
    closeAddTableModal.addEventListener("click", () => {
      addTableModal.style.display = "none";
    });
  }

  // Add Table Form Submit
  const addTableForm = document.getElementById("add-table-form");
  if (addTableForm) {
    addTableForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const idVal = document.getElementById("new-table-id").value.trim();
      const seatsVal = parseInt(document.getElementById("new-table-seats").value, 10);
      
      if (addDiningTable(idVal, seatsVal)) {
        addTableModal.style.display = "none";
        addTableForm.reset();
      }
    });
  }

  // Seating Capacity edit change listener
  const seatsEditInput = document.getElementById("table-seats-edit-input");
  if (seatsEditInput) {
    seatsEditInput.addEventListener("input", (e) => {
      const activeId = state.selectedTableId;
      const tableIndex = state.tables.findIndex(t => t.id === activeId);
      if (tableIndex !== -1) {
        state.tables[tableIndex].seats = parseInt(e.target.value, 10) || 4;
        renderTablesPage();
      }
    });
  }

  // Simulator Launch button click
  const simulateBtn = document.getElementById("simulate-table-btn");
  if (simulateBtn) {
    simulateBtn.addEventListener("click", () => {
      simulateCustomerTable(state.selectedTableId);
    });
  }

  // QR code toggle logo
  const qrLogoCheckbox = document.getElementById("qr-toggle-logo");
  if (qrLogoCheckbox) {
    qrLogoCheckbox.addEventListener("change", (e) => {
      state.qrCustomizer.showLogo = e.target.checked;
      renderQRStickerDetails();
    });
  }

  // QR code color dots
  const qrColorContainer = document.querySelector(".qr-color-dots");
  if (qrColorContainer) {
    qrColorContainer.addEventListener("click", (e) => {
      const dot = e.target.closest(".qr-color-dot");
      if (dot) {
        document.querySelectorAll(".qr-color-dot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
        state.qrCustomizer.color = dot.getAttribute("data-color");
        renderQRStickerDetails();
      }
    });
  }
}

// SIMULATOR SWITCH SCREEN
function switchCustomerScreen(screenId) {
  const screens = ["landing", "menu", "cart", "confirm"];
  screens.forEach(s => {
    const el = document.getElementById(`cust-${s}-view`);
    if (el) {
      el.style.display = s === screenId ? "flex" : "none";
    }
  });
}

// SAAS TABLES DROPDOWNS POPULATE
function populateSaaSTableDropdowns() {
  const simSelect = document.getElementById("cust-select-table-sim");
  if (simSelect) {
    simSelect.innerHTML = "";
    
    state.tables.forEach(table => {
      const rawNum = table.id.replace("T-", "");
      const simOpt = document.createElement("option");
      simOpt.value = rawNum;
      simOpt.textContent = `Table ${rawNum}`;
      
      if (rawNum === state.activeCustomerTable) {
        simOpt.selected = true;
      }
      simSelect.appendChild(simOpt);
    });
  }
}

// POPULATE DINING TABLES VIEW SELECTOR DROPDOWN
function populateDiningTablesSelectDropdown() {
  const saasTableSelect = document.getElementById("saas-table-select-page");
  if (saasTableSelect) {
    const currentVal = saasTableSelect.value;
    saasTableSelect.innerHTML = "";
    state.tables.forEach((table, index) => {
      const opt = document.createElement("option");
      opt.value = index + 1;
      opt.textContent = `Table ${table.id}`;
      saasTableSelect.appendChild(opt);
    });
    
    if (currentVal && parseInt(currentVal, 10) <= state.tables.length) {
      saasTableSelect.value = currentVal;
    } else if (state.tables.length > 0) {
      saasTableSelect.value = 1;
    }
    
    // Trigger display label and QR code update
    if (state.tables.length > 0) {
      const activeIdx = saasTableSelect.value;
      const selectedIndex = parseInt(activeIdx, 10);
      const displayIndex = selectedIndex < 10 ? `0${selectedIndex}` : selectedIndex;
      const displayLabel = `Table T-${displayIndex}`;
      
      const labelDisp = document.getElementById("saas-table-label-display");
      if (labelDisp) {
        labelDisp.textContent = displayLabel;
      }
      const nextSibling = labelDisp ? labelDisp.nextElementSibling : null;
      if (nextSibling) {
        nextSibling.textContent = `http://localhost:3000/menu?table=T-${displayIndex}`;
      }
    }
  }
}

// RENDER SETTINGS PANEL STATE
function renderSettingsPanel() {
  const settings = state.restaurantSettings;
  
  // Fill inputs
  document.getElementById("settings-name").value = settings.name;
  document.getElementById("settings-tagline").value = settings.tagline || "";
  document.getElementById("settings-currency").value = settings.currency || "₹";
  document.getElementById("settings-tables").value = settings.tablesCount || 5;
  document.getElementById("settings-tax").value = (settings.taxRate * 100 * 2).toFixed(1);
  document.getElementById("settings-service").value = (settings.serviceChargeRate * 100).toFixed(1);
  
  // Sync Dark Mode state
  const darkToggle = document.getElementById("settings-darkmode");
  if (darkToggle) {
    darkToggle.checked = document.body.classList.contains("dark-theme");
  }
  
  // Sync Theme Color dot
  const currentAccentColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
  const themeDots = document.querySelectorAll(".theme-dot");
  themeDots.forEach(dot => {
    const dotColor = dot.getAttribute("data-color");
    if (dotColor === currentAccentColor) {
      themeDots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    }
  });

  updateSettingsPreview();
}

// UPDATE SETTINGS SUMMARY PREVIEW CARD
function updateSettingsPreview() {
  const nameVal = document.getElementById("settings-name").value;
  const tablesVal = document.getElementById("settings-tables").value;
  const taxVal = document.getElementById("settings-tax").value;
  const serviceVal = document.getElementById("settings-service").value;
  const currencyVal = document.getElementById("settings-currency").value;
  
  document.getElementById("preview-store-name").textContent = nameVal || "Serviq";
  document.getElementById("preview-store-tables").textContent = `${tablesVal || 5} Tables`;
  document.getElementById("preview-store-tax").textContent = `${taxVal || 0}% (GST)`;
  document.getElementById("preview-store-service").textContent = `${serviceVal || 0}%`;
  
  let currLabel = currencyVal;
  if (currencyVal === "₹") currLabel = "₹ (INR)";
  if (currencyVal === "$") currLabel = "$ (USD)";
  if (currencyVal === "€") currLabel = "€ (EUR)";
  if (currencyVal === "£") currLabel = "£ (GBP)";
  if (currencyVal === "AED") currLabel = "AED";
  document.getElementById("preview-store-currency").textContent = currLabel;
}

// ==========================================
// 1. RENDER DASHBOARD OVERVIEW
// ==========================================
function renderDashboardOverview() {
  // Update Current Date & Time
  const now = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  document.getElementById("dashboard-date-time").textContent = now.toLocaleDateString('en-US', options);

  // Revenue calculation from Paid orders
  const revenueTotal = state.orders
    .filter(o => o.billingStatus === "paid")
    .reduce((acc, curr) => acc + curr.total, 0);
  
  // Format revenue cleanly
  document.getElementById("dash-val-revenue").innerHTML = `₹${revenueTotal.toLocaleString('en-IN')}`;
  
  // Total Orders count
  document.getElementById("dash-val-orders").textContent = state.orders.length;
  document.getElementById("dash-val-in-progress").textContent = `${state.orders.filter(o => o.status === "preparing").length} in progress`;
  
  // Active Tables
  const occupiedTables = state.tables.filter(t => t.status === "Occupied").length;
  document.getElementById("dash-val-tables").textContent = `${occupiedTables} / ${state.tables.length}`;
  document.getElementById("dash-val-table-avail").textContent = `${state.tables.length - occupiedTables} table available`;

  // Pending Orders
  const pendingCount = state.orders.filter(o => o.status === "new").length;
  document.getElementById("dash-val-pending").textContent = pendingCount;
  
  // Live orders badge in sidebar
  if (pendingCount > 0) {
    document.getElementById("live-orders-badge").style.display = "inline-block";
  } else {
    document.getElementById("live-orders-badge").style.display = "none";
  }

  // Render Table status widget (right sidebar)
  const tablesContainer = document.getElementById("dash-tables-grid-container");
  tablesContainer.innerHTML = "";
  state.tables.forEach(table => {
    const cell = document.createElement("div");
    cell.className = `dash-table-cell ${table.status.toLowerCase()}`;
    cell.innerHTML = `
      <div class="table-cell-id">${table.id}</div>
      <div class="table-cell-status">${table.status}</div>
    `;
    tablesContainer.appendChild(cell);
  });

  // Render Live Order Feed Table
  const feedBody = document.getElementById("dash-order-feed-tbody");
  feedBody.innerHTML = "";
  
  // Show last 5 orders
  const lastOrders = [...state.orders].slice(-5);
  lastOrders.forEach(ord => {
    const itemSummary = ord.items.map(i => `${i.name} x ${i.qty}`).join(", ");
    let statusClass = "badge-new";
    if (ord.status === "preparing") statusClass = "badge-preparing";
    if (ord.status === "ready") statusClass = "badge-ready";
    if (ord.status === "done") statusClass = "badge-done";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>#${ord.id}</td>
      <td>Table ${ord.table}</td>
      <td class="items-cell" title="${itemSummary}">${itemSummary}</td>
      <td>${ord.timeAgo}</td>
      <td><span class="badge-custom ${statusClass}">${ord.status}</span></td>
    `;
    feedBody.appendChild(tr);
  });
}

// ==========================================
// 2. RENDER INCOMING ORDERS PIPELINE
// ==========================================
function renderIncomingOrders() {
  const container = document.getElementById("incoming-orders-list");
  container.innerHTML = "";

  const filter = state.activeIncomingFilter; // All, New, Preparing, Ready, Done
  let filtered = state.orders;

  if (filter !== "All") {
    const targetStatus = filter.toLowerCase();
    filtered = filtered.filter(ord => ord.status === targetStatus);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-muted);">No orders in ${filter} category.</div>`;
    return;
  }

  // Reverse list to show newest on top
  [...filtered].reverse().forEach(ord => {
    const bar = document.createElement("div");
    bar.className = "incoming-order-bar";

    const itemTagsHtml = ord.items.map(item => `
      <span class="order-item-pill">${item.name} × ${item.qty}</span>
    `).join("");

    let notesHtml = "";
    if (ord.notes) {
      notesHtml = `<div class="order-item-note">📝 Note: ${ord.notes}</div>`;
    }

    let statusClass = "badge-new";
    if (ord.status === "preparing") statusClass = "badge-preparing";
    if (ord.status === "ready") statusClass = "badge-ready";
    if (ord.status === "done") statusClass = "badge-done";

    // Setup action buttons mapping
    let completeBtnText = "Mark Complete";
    let nextStatus = "preparing";
    if (ord.status === "new") {
      completeBtnText = "🍳 Prepare";
      nextStatus = "preparing";
    } else if (ord.status === "preparing") {
      completeBtnText = "🔔 Set Ready";
      nextStatus = "ready";
    } else if (ord.status === "ready") {
      completeBtnText = "🍽️ Serve / Done";
      nextStatus = "done";
    }

    const actionHtml = ord.status === "done" 
      ? `<span style="font-size: 13px; color: var(--success); font-weight:600;">✔️ Served</span>`
      : `
        <button class="btn-print" onclick="alert('Sending Receipt #${ord.id} to Kitchen Printer...')">🖨️ Print</button>
        <button class="btn-mark-complete" onclick="changeStatus('${ord.id}', '${nextStatus}')">✔️ ${completeBtnText}</button>
      `;

    bar.innerHTML = `
      <div class="order-bar-header">
        <div style="display:flex; align-items:center; gap: 16px;">
          <span class="order-bar-id">#ORD-${ord.id}</span>
          <span class="order-bar-table">📍 Table ${ord.table}</span>
          <span class="order-bar-time">🕒 ${ord.time} · ${ord.timeAgo}</span>
        </div>
        <span class="badge-custom ${statusClass}">${ord.status}</span>
      </div>
      <div class="order-bar-content">
        <div class="order-bar-details">
          <div style="font-size: 11px; font-weight:700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 6px;">Items</div>
          <div style="display:flex; flex-wrap:wrap; gap: 6px;">
            ${itemTagsHtml}
          </div>
          ${notesHtml}
        </div>
        <div class="order-bar-actions">
          ${actionHtml}
        </div>
      </div>
    `;
    container.appendChild(bar);
  });
}

window.changeStatus = function(orderId, newStatus) {
  const index = state.orders.findIndex(ord => ord.id === orderId);
  if (index !== -1) {
    state.orders[index].status = newStatus;
    
    // Live update for tracking view if this is the active simulator order
    if (state.activeCustomerOrder && state.activeCustomerOrder.id === orderId) {
      state.activeCustomerOrder.status = newStatus === "done" ? "served" : newStatus;
      renderCustomerTrackingScreen();
    }

    // Check if table occupancy state updates
    if (newStatus === "done") {
      // Check if table has any other non-served orders
      const rawNum = state.orders[index].table;
      const activeOrd = state.orders.filter(o => o.table === rawNum && o.status !== "done");
      if (activeOrd.length === 0) {
        const tableIndex = state.tables.findIndex(t => t.id === `T-${rawNum}`);
        if (tableIndex !== -1) {
          state.tables[tableIndex].status = "Free";
        }
      }
    } else {
      // Set table as occupied
      const rawNum = state.orders[index].table;
      const tableIndex = state.tables.findIndex(t => t.id === `T-${rawNum}`);
      if (tableIndex !== -1) {
        state.tables[tableIndex].status = "Occupied";
      }
    }

    renderIncomingOrders();
    renderDashboardOverview();
    renderBillingPanel();
    renderTablesPage();
  }
};

// ==========================================
// 3. RENDER MENU MANAGEMENT PANEL
// ==========================================
function renderMenuManagement() {
  // Populate category list side column
  const sidebar = document.getElementById("menu-categories-list");
  sidebar.innerHTML = "";

  // Count items per category
  const categories = ["All Items", "Starters", "Rice Meals", "Tiffin", "Rotis", "Desserts", "Drinks"];
  categories.forEach(cat => {
    let count = 0;
    if (cat === "All Items") {
      count = state.menu.length;
    } else {
      count = state.menu.filter(item => item.category === cat).length;
    }

    const li = document.createElement("li");
    li.className = cat === state.activeMenuCategory ? "active" : "";
    li.setAttribute("data-cat", cat);
    li.innerHTML = `
      <span>${cat}</span>
      <span class="cat-count">${count}</span>
    `;
    sidebar.appendChild(li);
  });

  renderMenuList();
  resetMenuEditForm();
}

function renderMenuList(searchQuery = "") {
  const container = document.getElementById("menu-items-tbody");
  container.innerHTML = "";

  let filtered = state.menu;

  // Category filter
  if (state.activeMenuCategory !== "All Items") {
    filtered = filtered.filter(item => item.category === state.activeMenuCategory);
  }

  // Search filter
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 30px; color: var(--text-muted);">No menu items found.</div>`;
    return;
  }

  filtered.forEach(item => {
    const tr = document.createElement("tr");
    tr.className = "menu-item-row";
    tr.innerHTML = `
      <td style="width: 80px;">
        <div class="menu-image-placeholder-box">
          <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="photo-placeholder-fallback">Photo</div>
        </div>
      </td>
      <td>
        <div class="menu-item-title-col">
          <span class="name">${item.name}</span>
          <span class="cat-badge">${item.category}</span>
        </div>
      </td>
      <td style="font-weight: 700;">₹${item.price}</td>
      <td>
        <div class="avail-switch-container">
          <label class="switch">
            <input type="checkbox" ${item.available ? "checked" : ""} onchange="toggleItemAvailability('${item.id}', this.checked)">
            <span class="slider"></span>
          </label>
          <span class="avail-status-label">${item.available ? "Available" : "Unavailable"}</span>
        </div>
      </td>
      <td style="width: 100px;">
        <div style="display:flex; gap: 8px;">
          <button class="menu-action-btn edit-btn" onclick="populateEditItemForm('${item.id}')">✏️ Edit</button>
          <button class="menu-action-btn delete-btn" onclick="deleteMenuItem('${item.id}')">🗑️</button>
        </div>
      </td>
    `;
    container.appendChild(tr);
  });
}

window.toggleItemAvailability = function(itemId, isChecked) {
  const index = state.menu.findIndex(item => item.id === itemId);
  if (index !== -1) {
    state.menu[index].available = isChecked;
    renderMenuList(document.getElementById("menu-search-input").value.trim());
    renderCustomerMenu();
  }
};

window.deleteMenuItem = function(itemId) {
  if (confirm("Are you sure you want to delete this food item?")) {
    state.menu = state.menu.filter(item => item.id !== itemId);
    renderMenuManagement();
    renderCustomerMenu();
  }
};

window.populateEditItemForm = function(itemId) {
  const item = state.menu.find(m => m.id === itemId);
  if (item) {
    state.editingMenuItemId = item.id;
    document.getElementById("menu-form-title").textContent = "Edit Item";
    document.getElementById("edit-item-id").value = item.id;
    document.getElementById("edit-input-name").value = item.name;
    document.getElementById("edit-input-desc").value = item.desc;
    document.getElementById("edit-input-price").value = item.price;
    document.getElementById("edit-input-category").value = item.category;
    document.getElementById("edit-image-placeholder-label").textContent = "Image Loaded Successfully";
  }
};

function resetMenuEditForm() {
  state.editingMenuItemId = null;
  document.getElementById("menu-form-title").textContent = "Add New Item";
  document.getElementById("menu-edit-form").reset();
  document.getElementById("edit-item-id").value = "";
  document.getElementById("edit-image-placeholder-label").textContent = "No Image Selected";
}

// ==========================================
// 4. RENDER BILLING PANEL
// ==========================================
function renderBillingPanel() {
  const listContainer = document.getElementById("billing-tables-list");
  listContainer.innerHTML = "";

  state.billingData.forEach(item => {
    const row = document.createElement("div");
    row.className = `table-selection-row ${item.table === state.activeBillingTable ? "active" : ""}`;
    row.setAttribute("data-table", item.table);
    
    let statusClass = "billing-badge-unpaid";
    if (item.status === "Paid") statusClass = "billing-badge-paid";
    if (item.status === "Partial") statusClass = "billing-badge-partial";

    row.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:4px;">
        <span class="table-selection-title">${item.table}</span>
        <span class="table-selection-subtitle">${item.orders} orders · ₹${item.total}</span>
      </div>
      <span class="billing-badge ${statusClass}">${item.status}</span>
    `;
    listContainer.appendChild(row);
  });

  renderBillingSummary();
}

function renderBillingSummary() {
  const tableId = state.activeBillingTable; // e.g. Table 05
  const billInfo = state.billingData.find(item => item.table === tableId);
  
  if (!billInfo) return;

  document.getElementById("bill-title-header").textContent = `${tableId} — Bill Summary`;
  document.getElementById("bill-order-count-sub").textContent = `${billInfo.orders} orders · Last updated at 1:28 PM`;

  // Filter items matching the table orders
  const rawNum = tableId.replace("Table ", "");
  
  // Set default mockup items if no custom order exists yet
  let displayItems = [];
  if (tableId === "Table 05") {
    displayItems = [
      { name: "Paneer Tikka", qty: 2, price: 180 },
      { name: "Chicken Biryani", qty: 1, price: 320 },
      { name: "Butter Naan", qty: 3, price: 40 },
      { name: "Masala Chai", qty: 2, price: 40 }
    ];
  } else {
    // Find active order for this table
    const tableOrder = state.orders.find(o => parseInt(o.table) === parseInt(rawNum));
    if (tableOrder) {
      displayItems = tableOrder.items;
    } else {
      displayItems = [
        { name: "Standard Meals", qty: 1, price: billInfo.total }
      ];
    }
  }

  // Populate table rows
  const tbody = document.getElementById("billing-summary-items-tbody");
  tbody.innerHTML = "";

  let subtotal = 0;
  displayItems.forEach(item => {
    const cost = item.qty * item.price;
    subtotal += cost;

    const tr = document.createElement("tr");
    const currency = state.restaurantSettings.currency || "₹";
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>${currency}${item.price}</td>
      <td style="font-weight:600; text-align:right;">${currency}${cost}</td>
    `;
    tbody.appendChild(tr);
  });

  const taxRate = state.restaurantSettings.taxRate;
  const serviceRate = state.restaurantSettings.serviceChargeRate;
  const currency = state.restaurantSettings.currency || "₹";
  
  const cgst = parseFloat((subtotal * taxRate).toFixed(2));
  const sgst = parseFloat((subtotal * taxRate).toFixed(2));
  const serviceCharge = parseFloat((subtotal * serviceRate).toFixed(2));
  const grandTotal = subtotal + cgst + sgst + serviceCharge;

  const breakdownContainer = document.getElementById("billing-breakdown-container");
  if (breakdownContainer) {
    let serviceChargeHtml = "";
    if (serviceCharge > 0) {
      serviceChargeHtml = `
        <div class="breakdown-row" style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; color:var(--text-muted);">
          <span>Service Charge (${(serviceRate * 100).toFixed(1)}%)</span>
          <span style="font-weight:500; color:var(--text-main);">${currency}${serviceCharge}</span>
        </div>
      `;
    }
    
    breakdownContainer.innerHTML = `
      <div class="breakdown-row" style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; color:var(--text-muted);">
        <span>Subtotal</span>
        <span style="font-weight:500; color:var(--text-main);">${currency}${subtotal}</span>
      </div>
      <div class="breakdown-row" style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; color:var(--text-muted);">
        <span>CGST (${(taxRate * 100).toFixed(1)}%)</span>
        <span style="font-weight:500; color:var(--text-main);">${currency}${cgst}</span>
      </div>
      <div class="breakdown-row" style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; color:var(--text-muted);">
        <span>SGST (${(taxRate * 100).toFixed(1)}%)</span>
        <span style="font-weight:500; color:var(--text-main);">${currency}${sgst}</span>
      </div>
      ${serviceChargeHtml}
      <div class="breakdown-row total-row" style="display:flex; justify-content:space-between; border-top:1px solid var(--border); padding-top:10px; margin-top:10px; font-weight:700; font-size:15px; color:var(--text-main);">
        <span>Total</span>
        <span>${currency}${grandTotal}</span>
      </div>
    `;
  }

  // Hide paid status if paid already
  const payBtn = document.getElementById("bill-pay-btn");
  if (billInfo.status === "Paid") {
    payBtn.style.display = "none";
  } else {
    payBtn.style.display = "block";
  }
}

// ==========================================
// CUSTOMER SIDEBAR VIEWS ENGINE
// ==========================================
window.inlineCartChange = function(itemId, delta, event) {
  if (event) event.stopPropagation();
  const item = state.menu.find(m => m.id === itemId);
  if (!item) return;

  const cartIndex = state.cart.findIndex(c => c.id === itemId);
  if (cartIndex !== -1) {
    state.cart[cartIndex].quantity += delta;
    if (state.cart[cartIndex].quantity <= 0) {
      state.cart.splice(cartIndex, 1);
    }
  } else if (delta > 0) {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      notes: ""
    });
  }
  updateCustomerCartBarSticky();
  renderCustomerMenu();
  renderCustomerCart();
  
  // If we are currently viewing the cart screen, force a re-render of the cart
  const cartView = document.getElementById("cust-cart-view");
  if (cartView && cartView.style.display === "flex") {
    renderCustomerCart();
  }
};

function renderCustomerMenu(activeCategory = null, searchQuery = "") {
  const listContainer = document.getElementById("cust-menu-list-container");
  const pillsContainer = document.getElementById("cust-menu-categories-pills");

  const categories = ["All", "Rice Meals", "Tiffin", "Rotis", "Desserts", "Drinks"];
  const activePill = pillsContainer.querySelector(".cust-cat-pill.active");
  const currentCategory = activeCategory || (activePill ? activePill.getAttribute("data-cat") : "All");

  pillsContainer.innerHTML = "";
  categories.forEach(cat => {
    const pill = document.createElement("button");
    pill.className = `cust-cat-pill ${cat === currentCategory ? "active" : ""}`;
    pill.textContent = cat;
    pill.setAttribute("data-cat", cat);
    pill.addEventListener("click", (e) => {
      e.stopPropagation();
      renderCustomerMenu(cat);
    });
    pillsContainer.appendChild(pill);
  });

  let products = state.menu.filter(item => item.available === true);
  if (currentCategory !== "All") {
    products = products.filter(item => item.category === currentCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    products = products.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q)
    );
  }

  // Update dynamic category title strip
  const strip = document.getElementById("cust-category-title-strip");
  if (strip) {
    strip.textContent = `${currentCategory} - ${products.length} item${products.length === 1 ? '' : 's'}`;
  }

  listContainer.innerHTML = "";
  if (products.length === 0) {
    listContainer.innerHTML = `<div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 13px;">No dishes available.</div>`;
    return;
  }

  products.forEach(item => {
    const card = document.createElement("div");
    card.className = "cust-item-card";
    card.addEventListener("click", () => openCustomerItemModal(item.id));
    
    const cartItem = state.cart.find(c => c.id === item.id);
    let qtyControlHtml = "";
    if (cartItem) {
      qtyControlHtml = `
        <div class="cust-card-qty-control" onclick="event.stopPropagation();">
          <button class="cust-card-qty-btn" onclick="inlineCartChange('${item.id}', -1, event)">-</button>
          <span class="cust-card-qty-val">${cartItem.quantity}</span>
          <button class="cust-card-qty-btn" onclick="inlineCartChange('${item.id}', 1, event)">+</button>
        </div>
      `;
    } else {
      qtyControlHtml = `
        <button class="cust-card-add-btn" onclick="inlineCartChange('${item.id}', 1, event)">ADD</button>
      `;
    }

    card.innerHTML = `
      <div class="cust-item-details">
        <div class="card-top-badges">
          <span class="${item.veg ? 'veg-icon' : 'non-veg-icon'}"></span>
          ${item.bestseller ? '<span class="bestseller-badge">Bestseller</span>' : ''}
        </div>
        <h4 class="cust-item-name">${item.name}</h4>
        <div class="cust-item-desc">${item.desc}</div>
        <div class="cust-item-price">₹${item.price}</div>
        ${qtyControlHtml}
      </div>
      <div class="cust-item-img-wrapper">
        <img src="${item.image}" alt="${item.name}" class="cust-item-img" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60';">
      </div>
    `;
    listContainer.appendChild(card);
  });

  updateCustomerCartBarSticky();
}

let modalItemTemp = null;
function openCustomerItemModal(itemId) {
  const item = state.menu.find(m => m.id === itemId);
  if (!item) return;

  modalItemTemp = item;
  document.getElementById("cust-modal-item-name").textContent = item.name;
  document.getElementById("cust-modal-item-desc").textContent = item.desc;
  document.getElementById("cust-modal-item-price").textContent = `₹${item.price}`;
  
  const modalImg = document.getElementById("cust-modal-item-img");
  modalImg.src = item.image;
  modalImg.style.display = "block";

  document.getElementById("qty-value").textContent = "1";
  document.getElementById("cust-modal-notes").value = "";
  document.getElementById("cust-modal-total-price").textContent = `₹${item.price}`;

  document.getElementById("cust-item-modal").style.display = "flex";
}

function updateCustomerItemModalPrice(qty) {
  if (modalItemTemp) {
    const cost = qty * modalItemTemp.price;
    document.getElementById("cust-modal-total-price").textContent = `₹${cost}`;
  }
}

function updateCustomerCartBarSticky() {
  const stickyBar = document.getElementById("cust-cart-bar-sticky");
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update header cart badge
  const headerCartBadge = document.getElementById("cust-cart-badge-count");
  if (headerCartBadge) {
    headerCartBadge.textContent = totalCount;
  }

  if (state.cart.length === 0) {
    stickyBar.style.display = "none";
    return;
  }

  stickyBar.style.display = "block";
  
  const qtyCircle = document.getElementById("cust-cart-quantity-circle");
  if (qtyCircle) {
    qtyCircle.textContent = totalCount;
  }
  
  const subtotalEl = document.getElementById("cust-cart-subtotal");
  if (subtotalEl) {
    subtotalEl.textContent = `₹${subtotal}`;
  }
}

function renderCustomerCart() {
  const container = document.getElementById("cust-cart-items-container");
  container.innerHTML = "";

  if (state.cart.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 40px 0; color: var(--text-muted);">Your cart is empty. Add dishes from the menu to place an order.</div>`;
    document.getElementById("cust-summary-subtotal").textContent = `₹0.00`;
    document.getElementById("cust-summary-tax").textContent = `₹0.00`;
    document.getElementById("cust-summary-charge").textContent = `₹0.00`;
    document.getElementById("cust-summary-total").textContent = `₹0.00`;
    return;
  }

  let subtotal = 0;

  state.cart.forEach((item, index) => {
    const itemCost = item.price * item.quantity;
    subtotal += itemCost;

    const row = document.createElement("div");
    row.className = "cust-cart-item";

    let notesBadgeHtml = "";
    if (item.notes) {
      notesBadgeHtml = `<div style="font-size: 10px; color: var(--warning); margin-top: 2px;">📝 ${item.notes}</div>`;
    }

    row.innerHTML = `
      <div>
        <div style="font-weight: 600; font-size:13px;">${item.name}</div>
        <div style="font-size:11px; color:var(--text-muted);">₹${item.price} each</div>
        ${notesBadgeHtml}
      </div>
      <div style="display:flex; align-items:center; gap: 10px;">
        <div style="display:flex; align-items:center; gap: 6px; background-color: var(--bg-tertiary); padding: 2px 6px; border-radius: 12px;">
          <button style="border:none; background:transparent; font-weight:700; cursor:pointer;" onclick="changeCartQty(${index}, -1)">-</button>
          <span style="font-size:12px; font-weight:700; min-width: 14px; text-align:center;">${item.quantity}</span>
          <button style="border:none; background:transparent; font-weight:700; cursor:pointer;" onclick="changeCartQty(${index}, 1)">+</button>
        </div>
        <span style="font-weight:700; font-size:13px; min-width:55px; text-align:right;">₹${itemCost}</span>
      </div>
    `;
    container.appendChild(row);
  });

  const tax = parseFloat((subtotal * 0.05).toFixed(2)); // 5% GST
  const total = parseFloat((subtotal + tax).toFixed(2));

  document.getElementById("cust-summary-subtotal").textContent = `₹${subtotal}`;
  document.getElementById("cust-summary-tax").textContent = `₹${tax}`;
  document.getElementById("cust-summary-charge").textContent = `₹0.00`;
  document.getElementById("cust-summary-total").textContent = `₹${total}`;
}

window.changeCartQty = function(index, delta) {
  if (index >= 0 && index < state.cart.length) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    renderCustomerCart();
    updateCustomerCartBarSticky();
  }
};

function renderCustomerTrackingScreen() {
  const ord = state.activeCustomerOrder;
  if (!ord) return;

  document.getElementById("cust-confirm-order-id").textContent = `Order ID: #${ord.id}`;
  document.getElementById("cust-confirm-table-tag").textContent = `Table ${ord.table}`;

  const steps = ["pending", "preparing", "ready", "delivered"];
  steps.forEach(s => {
    document.getElementById(`step-${s}`).className = "track-step";
  });

  const activeStatus = ord.status; 

  if (activeStatus === "new") {
    document.getElementById("step-pending").classList.add("active");
    document.getElementById("cust-est-time").textContent = "15 - 20 mins";
  } else if (activeStatus === "preparing") {
    document.getElementById("step-pending").classList.add("active", "completed");
    document.getElementById("step-preparing").classList.add("active");
    document.getElementById("cust-est-time").textContent = "8 - 10 mins";
  } else if (activeStatus === "ready") {
    document.getElementById("step-pending").classList.add("active", "completed");
    document.getElementById("step-preparing").classList.add("active", "completed");
    document.getElementById("step-ready").classList.add("active");
    document.getElementById("cust-est-time").textContent = "1 - 2 mins";
  } else if (activeStatus === "done") {
    document.getElementById("step-pending").classList.add("active", "completed");
    document.getElementById("step-preparing").classList.add("active", "completed");
    document.getElementById("step-ready").classList.add("active", "completed");
    document.getElementById("step-delivered").classList.add("active", "completed");
    document.getElementById("cust-est-time").textContent = "Food Served!";
  }
}

window.updateSimulatorTableLabels = function() {
  const tableVal = state.activeCustomerTable;
  const labelText = `Table T-${tableVal}`;
  
  const custTableLabel = document.getElementById("cust-table-label");
  if (custTableLabel) custTableLabel.textContent = `Table ${tableVal}`;
  
  const custMenuTableLabelTop = document.getElementById("cust-menu-table-label-top");
  if (custMenuTableLabelTop) custMenuTableLabelTop.textContent = labelText;
  
  const custBrandSubtitle = document.getElementById("cust-brand-subtitle");
  if (custBrandSubtitle) custBrandSubtitle.textContent = `${labelText} · Order anytime`;
  
  const custConfirmTableTag = document.getElementById("cust-confirm-table-tag");
  if (custConfirmTableTag) custConfirmTableTag.textContent = `Table ${tableVal}`;
};

// ==========================================
// TABLES MANAGEMENT PAGE RENDERING & LOGIC
// ==========================================

function generateFancyQR(tableId, color = "#ff7a00", showLogo = true) {
  const logoDisplay = showLogo 
    ? `<rect x="38" y="38" width="24" height="24" fill="white" rx="4" />
       <!-- Stylistic Fork and Spoon Fork representation in SVG -->
       <path d="M46 43 L46 51 M48 43 L48 51 M50 43 L50 51 M44 51 H52" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
       <circle cx="50" cy="51" r="2" fill="${color}"/>
       <path d="M53 43 C53 47, 55 47, 55 53 L55 57" stroke="${color}" stroke-width="1.5" fill="none"/>`
    : '';

  return `
    <svg width="100%" height="100%" viewBox="0 0 100 100" style="display:block;">
      <!-- Corner Finder Top-Left -->
      <rect x="0" y="0" width="30" height="30" fill="${color}" rx="3" />
      <rect x="5" y="5" width="20" height="20" fill="white" rx="1.5" />
      <rect x="10" y="10" width="10" height="10" fill="${color}" rx="1" />
      
      <!-- Corner Finder Top-Right -->
      <rect x="70" y="0" width="30" height="30" fill="${color}" rx="3" />
      <rect x="75" y="5" width="20" height="20" fill="white" rx="1.5" />
      <rect x="80" y="10" width="10" height="10" fill="${color}" rx="1" />
      
      <!-- Corner Finder Bottom-Left -->
      <rect x="0" y="70" width="30" height="30" fill="${color}" rx="3" />
      <rect x="5" y="75" width="20" height="20" fill="white" rx="1.5" />
      <rect x="10" y="80" width="10" height="10" fill="${color}" rx="1" />
      
      <!-- Alignment Pattern -->
      <rect x="74" y="74" width="12" height="12" fill="${color}" rx="2" />
      <rect x="77" y="77" width="6" height="6" fill="white" rx="1" />
      <rect x="79" y="79" width="2" height="2" fill="${color}" rx="0.5" />
      
      <!-- Styled Matrix Dot Patterns -->
      <rect x="36" y="4" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="46" y="0" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="56" y="6" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="36" y="14" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="46" y="18" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="56" y="12" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="36" y="24" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="46" y="28" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="56" y="22" width="6" height="6" fill="${color}" rx="1.5" />

      <rect x="4" y="36" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="14" y="36" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="24" y="36" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="0" y="46" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="18" y="48" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="28" y="46" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="6" y="56" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="14" y="58" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="24" y="56" width="6" height="6" fill="${color}" rx="1.5" />

      <rect x="36" y="72" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="46" y="78" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="56" y="74" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="38" y="86" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="48" y="88" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="58" y="84" width="6" height="6" fill="${color}" rx="1.5" />
      
      <rect x="74" y="36" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="88" y="36" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="72" y="46" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="82" y="44" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="92" y="48" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="76" y="56" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="86" y="58" width="6" height="6" fill="${color}" rx="1.5" />

      <rect x="90" y="74" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="88" y="86" width="6" height="6" fill="${color}" rx="1.5" />
      <rect x="78" y="90" width="6" height="6" fill="${color}" rx="1.5" />
      
      ${logoDisplay}
    </svg>
  `;
}

function renderTablesPage() {
  const gridContainer = document.getElementById("dining-tables-grid-container");
  if (!gridContainer) return;
  
  // Calculate Metrics
  const totalTables = state.tables.length;
  const occupiedCount = state.tables.filter(t => t.status === "Occupied").length;
  const totalSeats = state.tables.reduce((sum, t) => sum + (t.seats || 4), 0);
  const freeCount = totalTables - occupiedCount;

  // Set Metric values
  document.getElementById("metric-total-tables").textContent = totalTables;
  document.getElementById("metric-occupied-tables").textContent = occupiedCount;
  document.getElementById("metric-seating-capacity").textContent = totalSeats;
  document.getElementById("metric-free-tables").textContent = freeCount;

  // Render Grid Cards
  gridContainer.innerHTML = "";
  
  state.tables.forEach(table => {
    const card = document.createElement("div");
    const isSelected = table.id === state.selectedTableId;
    card.className = `dining-table-card ${isSelected ? 'active' : ''} ${table.status.toLowerCase()}`;
    card.setAttribute("data-id", table.id);

    let orderSummaryText = "No active orders";
    let billAmount = "";
    
    const tableNumRaw = table.id.replace("T-", "");
    const tableOrder = state.orders.find(o => parseInt(o.table) === parseInt(tableNumRaw) && o.status !== "done");
    if (tableOrder) {
      orderSummaryText = `${tableOrder.items.length} items · ${tableOrder.timeAgo}`;
      billAmount = `₹${tableOrder.total}`;
    } else {
      const billData = state.billingData.find(b => b.table === `Table ${tableNumRaw}`);
      if (billData && billData.status !== "Paid") {
        orderSummaryText = `${billData.orders} orders pending payment`;
        billAmount = `₹${billData.total}`;
      }
    }

    let statusText = "🟢 Available";
    if (table.status === "Occupied") {
      statusText = "🟠 Seated / Ordering";
      const billData = state.billingData.find(b => b.table === `Table ${tableNumRaw}`);
      if (billData && billData.status === "Unpaid" && !tableOrder) {
        statusText = "🔴 Bill Pending";
      }
    }

    card.innerHTML = `
      <div class="card-header-row">
        <span class="table-name-label">Table ${table.id}</span>
        <span class="seats-label">👥 ${table.seats || 4} Seats</span>
      </div>
      <div class="table-card-status">${statusText}</div>
      <div class="table-card-summary">${orderSummaryText}</div>
      ${billAmount ? `<div class="table-card-bill-tag">${billAmount}</div>` : ''}
      
      <!-- Mini QR Preview -->
      <div class="mini-qr-preview-box">
        ${generateFancyQR(table.id, state.qrCustomizer.color, false)}
      </div>

      <div class="table-card-actions">
        <button class="table-action-btn view-btn" onclick="event.stopPropagation(); selectActiveTableQR('${table.id}')">🔍 View QR</button>
        ${table.status === "Occupied" ? `<button class="table-action-btn clear-btn" onclick="event.stopPropagation(); clearTableStatus('${table.id}')">🧼 Clear</button>` : ''}
        <button class="table-action-btn delete-btn" onclick="event.stopPropagation(); deleteDiningTable('${table.id}')">🗑️</button>
      </div>
    `;

    card.addEventListener("click", () => {
      selectActiveTableQR(table.id);
    });

    gridContainer.appendChild(card);
  });

  renderQRStickerDetails();
}

function selectActiveTableQR(tableId) {
  state.selectedTableId = tableId;
  
  document.querySelectorAll(".dining-table-card").forEach(card => {
    if (card.getAttribute("data-id") === tableId) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  const title = document.getElementById("customizer-panel-title");
  if (title) title.textContent = `Table ${tableId} Details`;

  renderQRStickerDetails();
}

function renderQRStickerDetails() {
  const tableId = state.selectedTableId;
  const table = state.tables.find(t => t.id === tableId);
  if (!table) return;

  const tableNumRaw = table.id.replace("T-", "");
  
  document.getElementById("sticker-store-name").textContent = state.restaurantSettings.name;
  document.getElementById("sticker-table-label-display").textContent = `Table ${table.id}`;
  
  const urlDisplay = document.getElementById("sticker-url-display");
  if (urlDisplay) {
    urlDisplay.textContent = `http://localhost:3000/menu?table=T-${tableNumRaw}`;
  }

  const qrDisplay = document.getElementById("fancy-qr-display");
  if (qrDisplay) {
    qrDisplay.innerHTML = generateFancyQR(tableId, state.qrCustomizer.color, state.qrCustomizer.showLogo);
  }

  const seatsInput = document.getElementById("table-seats-edit-input");
  if (seatsInput) {
    seatsInput.value = table.seats || 4;
  }
  
  const logoCheckbox = document.getElementById("qr-toggle-logo");
  if (logoCheckbox) {
    logoCheckbox.checked = state.qrCustomizer.showLogo;
  }

  document.querySelectorAll(".qr-color-dot").forEach(dot => {
    if (dot.getAttribute("data-color") === state.qrCustomizer.color) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function addDiningTable(tableId, seats) {
  let cleanId = tableId.trim().toUpperCase();
  if (!cleanId.startsWith("T-")) {
    cleanId = "T-" + cleanId;
  }

  if (state.tables.some(t => t.id === cleanId)) {
    alert(`Table ${cleanId} already exists!`);
    return false;
  }

  state.tables.push({
    id: cleanId,
    status: "Free",
    seats: parseInt(seats, 10) || 4
  });

  state.tables.sort((a, b) => a.id.localeCompare(b.id));
  state.restaurantSettings.tablesCount = state.tables.length;
  state.selectedTableId = cleanId;

  populateSaaSTableDropdowns();
  populateDiningTablesSelectDropdown();

  renderTablesPage();
  renderDashboardOverview();
  renderBillingPanel();
  renderSettingsPanel();
  
  alert(`Table ${cleanId} created successfully.`);
  return true;
}

function deleteDiningTable(tableId) {
  const table = state.tables.find(t => t.id === tableId);
  if (!table) return;

  if (table.status === "Occupied") {
    if (!confirm(`Warning: Table ${tableId} is currently Occupied. Are you sure you want to delete it?`)) {
      return;
    }
  } else {
    if (!confirm(`Are you sure you want to delete Table ${tableId}?`)) {
      return;
    }
  }

  state.tables = state.tables.filter(t => t.id !== tableId);
  state.restaurantSettings.tablesCount = state.tables.length;

  if (state.selectedTableId === tableId && state.tables.length > 0) {
    state.selectedTableId = state.tables[0].id;
  }

  populateSaaSTableDropdowns();
  populateDiningTablesSelectDropdown();

  renderTablesPage();
  renderDashboardOverview();
  renderBillingPanel();
  renderSettingsPanel();
  
  alert(`Table ${tableId} deleted successfully.`);
}

function clearTableStatus(tableId) {
  const tableIndex = state.tables.findIndex(t => t.id === tableId);
  if (tableIndex !== -1) {
    state.tables[tableIndex].status = "Free";
    
    const tableNumRaw = tableId.replace("T-", "");
    
    state.orders.forEach((ord, idx) => {
      if (parseInt(ord.table) === parseInt(tableNumRaw)) {
        state.orders[idx].billingStatus = "paid";
        state.orders[idx].status = "done";
      }
    });

    const bIndex = state.billingData.findIndex(b => b.table === `Table ${tableNumRaw}`);
    if (bIndex !== -1) {
      state.billingData[bIndex].status = "Paid";
    }

    renderTablesPage();
    renderDashboardOverview();
    renderIncomingOrders();
    renderBillingPanel();
    alert(`Table ${tableId} cleared and marked available.`);
  }
}

function simulateCustomerTable(tableId) {
  const tableNumRaw = tableId.replace("T-", "");
  state.activeCustomerTable = tableNumRaw;
  
  const simSelect = document.getElementById("cust-select-table-sim");
  if (simSelect) {
    simSelect.value = tableNumRaw;
  }

  updateSimulatorTableLabels();
  switchCustomerScreen("landing");

  const simulator = document.getElementById("simulator-panel");
  if (simulator && simulator.classList.contains("collapsed")) {
    simulator.classList.remove("collapsed");
    renderCustomerMenu();
  }
  
  alert(`Simulator loaded for Table T-${tableNumRaw}!`);
}
