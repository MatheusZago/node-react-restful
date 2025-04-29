export function handleApiError(error) {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
  
      switch (status) {
        case 400:
          return data.error?.message || "Error: Name and/or email invalid.";
        case 404:
          return data.error?.message || "Error: Id not found.";
        case 500:
          return "Error: Server error. Please try again later.";
        default:
          return "Error: Unexpected error occurred.";
      }
    } else if (error.request) {
      return "No response from server. Please check your internet connection.";
    } else {
      return "An unexpected error occurred.";
    }
  }