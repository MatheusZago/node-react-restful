export function handleApiError(error) {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
  
      switch (status) {
        case 400:
          return data.error?.message || "Invalid field.";
        case 404:
          return data.error?.message || "Id not found.";
        case 500:
          return "Server error. Please try again later.";
        default:
          return "Unexpected error occurred.";
      }
    } else if (error.request) {
      return "No response from server. Please check your internet connection.";
    } else {
      return "An unexpected error occurred.";
    }
  }