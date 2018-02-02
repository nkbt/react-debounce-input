/*
 *  - usage with default 'input' element:
 *
 *      <DebounceInput
 *        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
 *      />
 *
 *  - usage with 'textarea':
 *
 *      const DebouncedTextArea: Debounced<HTMLTextAreaElement> = DebounceInput;
 *      
 *      <DebouncedTextArea
 *        element={'textarea'}
 *        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {}}
 *      />
 *
 *  - usage with custom element that has 'value' and 'onChange' props:
 *
 *      interface MyComponentProps {
 *        value?: string | number;
 *        onChange: React.ChangeEventHandler<MyComponent>;
 *      }
 *
 *      class MyComponent extends React.Component<MyComponentProps> {}
 *
 *      const DebouncedMyComponent: Debounced<MyComponent> = DebounceInput;
 *
 *      <DebouncedMyComponent
 *        element={MyComponent}
 *        onChange={(e: React.ChangeEvent<MyComponent>) => {}}
 *      />
 */

import * as React from 'react';

interface WrappedProps<T> {
  readonly value?: string | number;
  readonly onChange: React.ChangeEventHandler<T>;
}

export type Debounced<T> = React.ComponentType<DebounceInputProps<T>>;

export interface DebounceInputProps<
  Wrapped = HTMLInputElement
> extends React.InputHTMLAttributes<Wrapped> {
  readonly element?: string | React.ComponentType<WrappedProps<Wrapped>>;
  readonly type?: string;
  readonly onChange: React.ChangeEventHandler<Wrapped>;
  readonly onKeyDown?: React.KeyboardEventHandler<Wrapped>;
  readonly onBlur?: React.FocusEventHandler<Wrapped>;
  readonly value?: string | number;
  readonly minLength?: number;
  readonly debounceTimeout?: number;
  readonly forceNotifyByEnter?: boolean;
  readonly forceNotifyOnBlur?: boolean;
  readonly inputRef?: React.Ref<Wrapped>;
}

export declare class DebounceInput<
  Wrapped = HTMLInputElement
> extends React.PureComponent<DebounceInputProps<Wrapped>> {

}
