import { showToastMessage } from '../components';

const validateFields = (fields) => {
    for (let field of fields) {
      const { value, validationType, keyName } = field;
      
      // Perform validation based on validationType
      switch (validationType) {
        case 'required':
          if (!value.trim()) {
            showToastMessage(`${keyName} is required`, 'error');
            return false;
          }
         
        break;
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            showToastMessage(`A valid ${keyName} is required`, 'error');
            return false;
          }
        break;
        case 'checkbox':
          if (!value) {
            showToastMessage(`${keyName} should be checked`, 'error')
            return false;
          }
        break;
        // Add more validation types as needed
        default:
          // Unsupported validation type
          return false;
      }
    }
    
    // All fields passed validation
    return true;
  };
  
//   // Example usage:
//   const fields = [
//     { value: 'John Doe', validationType: 'required' },
//     { value: 'john@example.com', validationType: 'email' }
//     { value: true, validationType: 'checkbox' }
//   ];
  
//   console.log(validateFields(fields)); // Output: true


export default validateFields;