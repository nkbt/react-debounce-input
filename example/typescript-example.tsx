import * as React from 'react';
import { DebounceInput, DebounceTextArea, Debounced } from "../src/index";

//  - usage with default 'input' element:

    <DebounceInput
      className={'some-class'}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
    />

//  - usage with 'textarea':

    // DebounceTextArea is just a type, so it should be explicitly defined as value
    const DebounceTextArea: DebounceTextArea = DebounceInput;
    
    <DebounceTextArea
      element={'textarea'}
      rows={1}
      cols={2}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {}}
    />

//  - usage with custom element that has 'value' and 'onChange' props:

    interface MyComponentProps {
      value?: string | number;
      onChange: React.ChangeEventHandler<MyComponent>;
      
      myCustomProp: number; 
    }

    class MyComponent extends React.Component<MyComponentProps> {}

    const DebouncedMyComponent: Debounced<MyComponent, MyComponentProps> = DebounceInput;

    <DebouncedMyComponent
      element={MyComponent}
      myCustomProp={1}         // OK, myCustomProp will be passed down to MyComponent
      // myInvalidCustomProp={2}  // Error, there is no myInvalidCustomProp in MyComponentProps
      onChange={(e: React.ChangeEvent<MyComponent>) => {}}
    />
 
