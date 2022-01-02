import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { FormControl, Button, Select } from '../../../common/components/Ui'
import './ExpensesFilters.css';

const thisYear = (new Date()).getFullYear();
export const EXPENSES_FILTERS_YEAR_OPTIONS = [
  { label: (thisYear - 2).toString(), value: thisYear - 2 },
  { label: (thisYear - 1).toString(), value: thisYear - 1 },
  { label: thisYear.toString(), value: thisYear },
];

export const EXPENSES_FILTERS_SCHEMA = {
  year: null,
};

export const useExpensesFiltersForm = (filters, formSchema) => {

  const initialState = {
    year: filters?.year ?? (new Date()).getFullYear(),
  };

  const [isValid, setIsValid] = useState(false);
  const [formValue, setFormValue] = useState(initialState);

  useEffect(() => {
    const newFilters = filters ? { ...filters } : {};
    setFormValue(newFilters);
  }, [filters]);

  const validateForm = (formToValidate) => {
    for (const field of Object.keys(formSchema)) {
      if (!formSchema[field]) continue;
      for (const validator of formSchema[field]) {
        switch (validator) {
          // Add validators here...
          default:
            break;
        }
      }
    }
    setIsValid(true);
  };

  const updateForm = (field, value) => {
    setFormValue(prevState => ({ ...prevState, [field]: value }));
    const toValidate = { ...formValue, [field]: value };
    validateForm(toValidate);
  };

  return [formValue, updateForm, isValid];
};

export const ExpensesFilters = ({
  isOpen,
  toggleOpen,
  filters,
  onSelectFilters,
  onClearFilters,
}) => {

  const [formValue, formUpdate, formIsValid] = useExpensesFiltersForm(
    filters,
    EXPENSES_FILTERS_SCHEMA
  );

  const onClickToggleContainer = () => {
    if (!isOpen) {
      toggleOpen(true);
    }
  };

  const onSetYear = (event) => {
    formUpdate('year', parseInt(event.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formIsValid) {
      onSelectFilters(formValue);
    }
  };

  return (
    <form
      className={classNames({
        'expenses-filters ya-cols': true,
        '--open': isOpen,
      })}
      onSubmit={onSubmit}
    >
      {/* Year */}
      <FormControl className="expenses-filters__control ya-col-12">
        <label htmlFor="filter-year">Year</label>
        <Select
          value={formValue.year}
          onChange={onSetYear}
          id="filter-year"
          fullWidth
          size="medium"
          options={EXPENSES_FILTERS_YEAR_OPTIONS}
        ></Select>
      </FormControl>

      {/* Submit */}
      <FormControl className="expenses-filters__submit ya-col-12">
        <Button fill="outline" type="button" onClick={onClearFilters}>
          Clear
        </Button>
        &nbsp;
        <Button fill="solid" type="submit" isDisabled={!formIsValid}>
          Confirm
        </Button>
      </FormControl>

      {/* Toggle */}
      <div
        className="expenses-filters__toggle-container"
        onClick={onClickToggleContainer}
      >
        <h2 className="expenses-filters__toggle-title">Filters</h2>
        <button
          type="button"
          onClick={() => toggleOpen()}
          className="expenses-filters__toggle"
        ></button>
      </div>
    </form>
  );
};
