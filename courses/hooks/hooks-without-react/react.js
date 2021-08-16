const React = (function() {
  let _val;
  return {
    
    render(Component) {
      const instance = Component();
      instance.render();
      return instance;
    },

    useState(initialValue) {
      value = value || initialValue;

      const setValue = newValue => {
        value = newValue;
      };

      return [value, setValue];
    }

  };
})();

function AgeComponent() {
  const [age, setAge] = React.useState(30);
  return {
    render() {
      console.log(age);
    },
    ageUp() {
      setAge(age + 1);
    }
  };
}

App = React.render(AgeComponent);
App.ageUp();
App = React.render(AgeComponent);
