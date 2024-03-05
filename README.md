# Email Template Generator: MJML & Handlebars Integration

This project leverages the power of MJML for creating responsive email templates, further supercharged with Handlebars for dynamic content generation. It simplifies the process of developing, testing, and deploying email templates with personalized content. Additionally, the integration of Handlebars allows for the use of reusable partials, making your email template creation process more efficient and modular.

## Getting Started

Before diving into template creation, ensure you have Node.js and Yarn installed on your machine. This project uses Yarn for dependency management and script execution.

### Installation

Clone the repository and install the dependencies to get started:

```bash
yarn install
```

### Development Workflow

This project includes a development watcher that monitors changes to `.mjml` files within the `templates` and `partials` folders. This also starts a dev server with hot reload on http://127.0.0.1:4000, which can be used for live preview. To start the watcher, run:

```bash
yarn dev
```

Upon modification of any MJML files, the watcher will automatically regenerate the HTML output, applying global variables and registered partials.

### Global Variables with `data.json`

The `data.json` file is designed to store global variables accessible in your MJML templates through Handlebars syntax. Define your global variables within this file, and they will be automatically applied during the template generation process.

Example `data.json`:

```json
{
  "companyName": "Your Company Name",
  // Add more global variables here
};
```

### Partials

Partials are reusable template fragments stored in the partials folder. They are automatically registered and can be included in any MJML template using Handlebars syntax.

Example of including a partial named header.mjml:

```handlebars
{{> header }}
```

Ensure your partial filenames and references match exactly for proper inclusion.

### Project Structure

* `data.json`: Contains global variables for your templates.
* `/templates`: MJML files for your email templates.
* `/partials`: Reusable MJML snippets, automatically registered with Handlebars.
* `/output`: Generated HTML files from MJML templates.

### Building for Production

To compile your MJML templates into HTML with all Handlebars variables and partials applied, run:

```bash
yarn build
```

This will generate the final, minified HTML output in the output directory, ready for deployment or testing in email clients.

### Contributing

Contributions to improve the project are welcome!
