# Amplitude-React

This library provides an easy way to log Amplitude events in your React applications.

## Installation

```
npm i amplitude-react
```

## Usage

First, wrap your application in the `AmplitudeReactProvider` and provide it with your project API key in Amplitude:

```
import { AmplitudeReactProvider } from "amplitude-react";

const App = () => (
  <AmplitudeReactProvider apiKey="my-amplitude-api-key">
    {/* app components */}
  </AmplitudeReactProvider>
);
```

Then call the `useAmplitude` hook:

```
import { useAmplitude } from "amplitude-react";

const MyComponent = (props: MyComponentProps) => {
  const { logEvent } = useAmplitude();

  const onClick = () => {
    // Log "my-button-click-event" with {foo: "bar"} as event properties to accompany it
    logEvent("my-button-click-event", {foo: "bar"});
  };

  return (
    <>
      <button onClick={onClick}>
        My Button
      </button>
      {/* rest of MyComponent */}
    </>
  )
};
```

## Available Functions

`useAmplitude()` returns the following convenience functions:

### logEvent: (eventName: string, eventProperties: Record<string, unknown>) => void;
Log the given event name and event properties.

### setUserId: (userId: string | null) => void;
Set the ID (if given a string), or unset the ID (if given null) of the current Amplitude user.

### setUserProperty: (property: string, value: string | number) => void;
Set the given property on the current Amplitude user.

### setDeviceId: (deviceId: string) => void;
Set the device ID of the current Amplitude user.

### resetIdentity: () => void;
Completely reset the current Amplitude user by resetting their user ID and device ID.

## Available Values

In addition to the above, `useAmplitude()` also returns the following values:

### client: AmplitudeClient
The current Amplitude instance. Use to perform any other functions documented in the [JS SDK docs](https://amplitude.com/docs/sdks/analytics/browser/javascript-sdk). 

### apiKey: string
Your current API key
