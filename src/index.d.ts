import * as React from 'react';

type WrappedComponent = React.ComponentType<{
  readonly value?: React.InputHTMLAttributes<WrappedComponent>['value'];
  readonly onChange?: React.InputHTMLAttributes<WrappedComponent>['onChange'];
}>;

export interface DebounceInputProps extends React.InputHTMLAttributes<DebounceInput> {
  readonly element?: string | WrappedComponent;
  readonly type?: string;
  readonly onChange: React.ChangeEventHandler<DebounceInput>;
  readonly onKeyDown?: React.KeyboardEventHandler<DebounceInput>;
  readonly onBlur?: React.FocusEventHandler<DebounceInput>;
  readonly value?: string | number;
  readonly minLength?: number;
  readonly debounceTimeout?: number;
  readonly forceNotifyByEnter?: boolean;
  readonly forceNotifyOnBlur?: boolean;
  readonly inputRef?: React.Ref<WrappedComponent>;
}

export declare class DebounceInput extends React.PureComponent<DebounceInputProps, {}> {

}
