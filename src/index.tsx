import amplitude, { AmplitudeClient } from 'amplitude-js';
import { createContext, useContext } from 'react';
import { nanoid } from 'nanoid';

type Context = {
  apiKey: string | null;
  client: AmplitudeClient;
  logEvent: (name: string, properties?: Record<string, unknown>) => void;
  setUserProperty: (property: string, value: string | number) => void;
  setUserId: (userId: string | null) => void;
  setDeviceId: (deviceId: string) => void;
  resetIdentity: () => void;
};


type AmplitudeReactProviderProps = {
  apiKey?: string;
  children: React.ReactNode;
}

const AmplitudeReactContext = createContext<Context | undefined>(undefined);

export const AmplitudeReactProvider = ({ apiKey, children }: AmplitudeReactProviderProps) => {
  const amplitudeInstance = amplitude.getInstance();

  if (apiKey) {
    amplitudeInstance.init(apiKey);
  }

  const logEvent = (name: string, properties?: Record<string, unknown>) => {
    if (!apiKey) return;
    amplitudeInstance.logEvent(name, properties)
  };

  const setUserProperty = (property: string, value: string | number) => {
    if (!apiKey) return;

    const identifyEvent = new amplitude.Identify();
    identifyEvent.set(property, value); 

    amplitudeInstance.identify(identifyEvent);
  };

  const setUserId = (userId: string | null) => {
    if (!apiKey) return;
    amplitudeInstance.setUserId(userId);
  }

  const setDeviceId = (deviceId: string) => {
    if (!apiKey) return;
    amplitudeInstance.setDeviceId(deviceId);
  };

  const resetIdentity = () => {
    if (!apiKey) return;
    amplitudeInstance.setUserId(null);
    amplitudeInstance.setDeviceId(nanoid());
  };

  const contextValue = {
    apiKey: apiKey ?? null,
    client: amplitudeInstance,
    logEvent,
    setUserId,
    setUserProperty,
    setDeviceId,
    resetIdentity
  }

	return (
		<AmplitudeReactContext.Provider value={contextValue}>
			{children}
		</AmplitudeReactContext.Provider>
	)
}

export const  useAmplitude = () => {
	const context = useContext(AmplitudeReactContext)

	if (context === undefined) {
		throw new Error('useAmplitude must be used within a AmplitudeReactProvider')
	}
	return context
}
