<?php
// update-info.php
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Update My Details</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-green-900">

  <!-- Navigation Bar (matches exactly your original Next.js layout) -->
    <header class="absolute top-0 left-0 w-full bg-green-700 py-4 px-6 sm:px-12 flex justify-between items-center shadow-lg z-50">
    <span class="text-white text-2xl font-bold tracking-wide">StrataConnect</span>
    <div class="flex items-center space-x-12">
        <nav class="flex space-x-8 text-white text-lg">
        <a href="/" class="hover:underline">Home</a>
        <a href="/services" class="hover:underline">Services</a>
        <a href="/about" class="hover:underline">About Us</a>
        <a href="/resources" class="hover:underline">Resources</a>
        <a href="/contact" class="hover:underline">Contact</a>
        </nav>
        <div class="flex space-x-4">
        <a href="/owners-login">
            <button class="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-green-700 transition">
            OWNERS LOGIN
            </button>
        </a>
        <a href="/payment">
            <button class="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-green-700 transition">
            PAY MY LEVIES
            </button>
        </a>
        </div>
    </div>
    </header>


  <!-- Main Form Content -->
  <main class="max-w-4xl mx-auto px-6 pt-28 pb-20">
    <h1 class="text-3xl font-bold mb-6">Update My Contact & Property Details</h1>
    <p class="mb-8">Keep your records up to date to ensure smooth communication and levy delivery. If you’re an owner, agent, or tenant, please complete the form below to notify us of changes.</p>

    <form action="submit-update.php" method="POST" class="space-y-10">

      <!-- Owner Details -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">1. Owner Details</h2>
        <select name="salutation" class="border p-2 rounded w-full mt-6">
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Dr</option>
            <option>Other</option>
        </select>


        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input name="first_name" required placeholder="First Name" class="border p-2 rounded">
          <input name="last_name" required placeholder="Last Name" class="border p-2 rounded">
        </div>

        <div class="mt-4 space-y-2">
          <input name="address1" required placeholder="Street Address" class="border p-2 rounded w-full">
          <input name="address2" placeholder="Address Line 2" class="border p-2 rounded w-full">
          <input name="city" placeholder="City" class="border p-2 rounded w-full">
          <input name="state" placeholder="State / Region" class="border p-2 rounded w-full">
          <input name="postcode" placeholder="ZIP / Postcode" class="border p-2 rounded w-full">
          <input name="country" placeholder="Country" class="border p-2 rounded w-full">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input name="home_phone" placeholder="Home Phone" class="border p-2 rounded">
          <input name="mobile_phone" required placeholder="Mobile Phone" class="border p-2 rounded">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input name="email" required placeholder="Email Address" class="border p-2 rounded">
          <input name="confirm_email" required placeholder="Confirm Email" class="border p-2 rounded">
        </div>
      </section>

      <!-- Property Details -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">2. Property / Strata Details</h2>
        <input name="property_address" required placeholder="Start Typing Your Property Address" class="border p-2 rounded w-full mb-4">
        <input name="strata_plan" placeholder="Strata Plan Number" class="border p-2 rounded w-full mb-2">
        <input name="lot_number" placeholder="Lot Number" class="border p-2 rounded w-full mb-2">
        <input name="level_unit" placeholder="Level / Unit" class="border p-2 rounded w-full mb-2">
        <input name="block_tower" placeholder="Block / Tower" class="border p-2 rounded w-full">
      </section>

      <!-- Agent & Tenant -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">3. Agent & Tenant Details (if applicable)</h2>
        <input name="agent_name" placeholder="Real Estate Agent Name" class="border p-2 rounded w-full mb-2">
        <input name="agent_phone" placeholder="Agent Phone" class="border p-2 rounded w-full mb-2">
        <input name="agent_email" placeholder="Agent Email" class="border p-2 rounded w-full mb-4">
        <input name="tenant_name" placeholder="Tenant Name" class="border p-2 rounded w-full mb-2">
        <input name="tenant_phone" placeholder="Tenant Phone" class="border p-2 rounded w-full mb-2">
        <input name="tenant_email" placeholder="Tenant Email" class="border p-2 rounded w-full">
      </section>

      <!-- Delivery Preferences -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">4. Delivery Preferences</h2>
        <div class="mb-4">
          <p class="font-medium mb-2">Notice Delivery Preference</p>
          <label><input type="radio" name="notice_delivery" value="owner_email" required> Owner via Email</label><br>
          <label><input type="radio" name="notice_delivery" value="agent_email"> Agent via Email</label><br>
          <label><input type="radio" name="notice_delivery" value="owner_post"> Owner via Post</label>
        </div>

        <div>
          <p class="font-medium mb-2">Levy Notice Delivery Preference</p>
          <label><input type="radio" name="levy_delivery" value="owner_email" required> Owner via Email</label><br>
          <label><input type="radio" name="levy_delivery" value="agent_email"> Agent via Email</label><br>
          <label><input type="radio" name="levy_delivery" value="owner_post"> Owner via Post</label>
        </div>
      </section>

      <p class="text-sm text-red-600">Important: We cannot update the owner’s name on title unless a Section 118 Notice or a certified copy of the Certificate of Title is provided.</p>

      <div class="text-center pt-6">
      <button type="submit" class="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
        Submit Updated Details
      </button>
      </div>
    </form>

    <p class="text-center mt-8 text-sm">
      Need help? Email us at <a href="mailto:info@strataconnect.com.au" class="text-blue-700 underline">info@strataconnect.com.au</a> or call 1300 123 456.
    </p>
  </main>

  <!-- Footer -->
  <footer class="text-center py-6 bg-green-700 text-white">
    <p class="text-sm">&copy; <?php echo date("Y"); ?> StrataConnect. All rights reserved.</p>
  </footer>
</body>
</html>
