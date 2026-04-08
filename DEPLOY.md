# Nasazení na Wedos (statický export)

1. **Build**

   ```bash
   npm install
   npm run build
   ```

   Výstup je složka **`out/`** s čistým HTML/CSS/JS (bez Node serveru).

2. **Proměnné prostředí**

   Před buildem nastavte v prostředí nebo v `.env.local` hodnoty z `.env.example` (EmailJS, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GTM_ID` pro Google Tag Manager). Hodnoty `NEXT_PUBLIC_*` se vkládají do klienta už při buildu.

3. **Nahrání na hosting**

   Obsah složky `out/` nahrajte do `public_html` (nebo do podsložky, pokud web běží v podadresáři – pak by bylo potřeba v Next zvážit `basePath`).

4. **HTTPS a doména**

   Ověřte, že kanonická adresa odpovídá `NEXT_PUBLIC_SITE_URL` (Open Graph a sitemap).

5. **Kontrola**

   Otestujte formulář a popup (EmailJS), mobilní menu a právní stránky.
