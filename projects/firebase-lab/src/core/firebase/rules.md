# Security rules

## Standard
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

## Test 1 (failed)
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
    }
  }
}

# Test 2
service cloud.firestore {
  match /databases/{database}/documents {
    match /shoppingList/{city} {
      allow read, write: if request.auth != null;
    }
  }
}
