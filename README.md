# Health-TS Express Server

This project is a simple Express server for calculating BMI (Body Mass Index) and Training Days.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the server**

   For development mode with automatic restarts:

   ```bash
   npm run dev
   ```

## Endpoints

### GET /hello

Returns a greeting message.

#### Request

```http
GET /hello
```

#### Response

```text
Hello Full Stack!
```

### GET /bmi

Calculates the BMI based on height and weight provided as query parameters.

#### Request

```http
GET /bmi?height=<height_in_cm>&weight=<weight_in_kg>
```

#### Query Parameters

- height (required): Height in centimeters.
- weight (required): Weight in kilograms.

#### Response

If the parameters are valid, the response will be:

```json
{
  "weight": "70",
  "height": "170",
  "bmi": "24.22"
}
```

If the parameters are missing or invalid, the response will be:

```json
{
  "error": "malformatted parameters"
}
```
