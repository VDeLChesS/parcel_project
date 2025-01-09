# Art Analytics Dashboard

This project is a web-based dashboard for visualizing art-related data, built with **Parcel** as the bundler. It features interactive charts and a map to explore top artists, venues, exhibitions, and paintings. The project also includes a time slider component that will be connected in future iterations.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <repository-name>
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:1234`.

## Features

### Charts

1. **Top 10 Artists Chart**: Displays the top 10 artists by one of the following criteria:
   * Number of venues
   * Number of exhibitions
   * Number of paintings

2. **Top 10 Venues Chart**: Displays the top 10 venues by one of the following criteria:
   * Number of artists
   * Number of exhibitions
   * Number of exhibited paintings

You can switch between these criteria to explore different aspects of the data.

### Map

The map is implemented using **Leaflet.js** for simplicity and lightweight performance. Users who prefer more advanced features, such as custom styling or additional layers, can easily switch to **Mapbox.js** by modifying the map code.

### Time Slider

A time slider component is included in the application, but it is not yet linked to any specific functionality. This is planned for future updates.

## Contribution

Feel free to contribute by submitting issues or pull requests to improve the project!

## License

This project is licensed under the MIT License.
