import React, {useState, useCallback} from 'react';
import {DebounceInput} from '../src';


export function DefaultValue() {
  const [type, setType] = useState('number');
  const [value, setValue] = useState(0);

  const onChange = useCallback(e => setValue(e.target.value), [setValue]);

  const onEmptyNumber = useCallback(() => {
    setType(undefined);
    setValue(undefined);
    setTimeout(() => {
      setType('number');
    });
  }, [setValue, setType]);

  const onNumberZero = useCallback(() => {
    setType(undefined);
    setValue(undefined);
    setTimeout(() => {
      setValue(0);
      setType('number');
    });
  }, [setValue, setType]);

  const onNumber = useCallback(() => {
    setType(undefined);
    setValue(undefined);
    setTimeout(() => {
      setValue(5);
      setType('number');
    });
  }, [setValue, setType]);

  const onEmptyText = useCallback(() => {
    setType(undefined);
    setValue(undefined);
    setTimeout(() => {
      setType('text');
    });
  }, [setValue, setType]);

  const onText = useCallback(() => {
    setType(undefined);
    setValue(undefined);
    setTimeout(() => {
      setValue('some text');
      setType('text');
    });
  }, [setValue, setType]);

  const onDestroy = useCallback(() => {
    setValue(undefined);
    setType(undefined);
  }, [setValue, setType]);


  return (
    <>
      <div className="config">
        <label className="label">
          <button
            type="button"
            className="input"
            onClick={onNumberZero}>
            Number with value 0
          </button>
        </label>
        <label className="label">
          <button
            type="button"
            className="input"
            onClick={onEmptyNumber}>
            Number with no value
          </button>
        </label>
        <label className="label">
          <button
            type="button"
            className="input"
            onClick={onNumber}>
            Number with some value
          </button>
        </label>
        <label className="label">
          <button
            type="button"
            className="input"
            onClick={onEmptyText}>
            Text with no value
          </button>
        </label>
        <label className="label">
          <button
            type="button"
            className="input"
            onClick={onText}>
            Text with some value
          </button>
        </label>
        <label className="label">
          <button
            type="button"
            className="input"
            onClick={onDestroy}>
            Destroy
          </button>
        </label>
      </div>

      {type && (
        <DebounceInput
          type={type}
          value={value}
          debounceTimeout={500}
          onChange={onChange} />
      )}

      <p>Type: {JSON.stringify(type)}</p>
      <p>Value: {JSON.stringify(value)}</p>
    </>
  );
}
