# Deployment Guide for myCupcake

## Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/) and sign in to your account.
2. Click on the **+** icon in the upper right corner and select **New repository**.
3. Choose a name for your repository (e.g., `for-my-cupcake`).
4. Add a description and choose visibility (public/private).
5. Click **Create repository**.

## Step 2: Set Up GitHub Pages
1. Navigate to the repository settings by clicking on the **Settings** tab.
2. Scroll down to the **GitHub Pages** section.
3. Under **Source**, select the branch you want to publish (usually `main`).
4. Click **Save**.
5. You will see a URL generated for your GitHub Pages site.

## Step 3: Configure Custom Domain
1. In the **GitHub Pages** section of your repository settings, find the **Custom domain** field.
2. Enter your custom domain (e.g., `www.formycupcake.com`).
3. Click **Save** to apply the changes.

## Step 4: Set Up DNS Records for Custom Domain
1. Log in to your domain registrar's website.
2. Navigate to the DNS management section.
3. Create two A records pointing to GitHub's IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. If using a CNAME record, create a CNAME record for `www` pointing to your GitHub Pages URL.

## Step 5: Enable HTTPS Enforcement
1. Return to your repository's settings.
2. In the **GitHub Pages** section, ensure the option **Enforce HTTPS** is checked. This may take a few minutes to activate after setting up your custom domain.

## Step 6: Troubleshooting
- **Website Not Loading**: Check your DNS configuration and ensure the A/CNAME records are set up correctly.
- **Custom Domain Not Updating**: It can take time for DNS changes to propagate. Wait a few hours and clear your browser cache.

## Step 7: Performance Tips
- Enable caching by setting appropriate cache headers in your projects.
- Minimize the use of heavy resources (like images) and optimize them for web.

Now your deployment setup is complete! Enjoy your custom domain for your cupcake project!