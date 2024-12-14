# Pincode API

A RESTful API for managing pincode-related data.

## Base URL

`/dev/api/v1`

## Endpoints

### 1. Fetch All Data

**GET** `/pincode`  

Returns a list of all available pincode data.  

---

### 2. Fetch Data by Pincode (ToDo)

**GET** `/pincode/:code`  

Retrieves data for a specific pincode.  

---

### 3. Load Data (Authorized)

**POST** `/pincode`  

Uploads new pincode data.  

> **Note:** This endpoint requires authorization.  

---

### 4. Update Data (ToDo)

**PATCH** `/pincode/:code`  

Updates existing data for the specified pincode.  

---

### 5. Delete Data by Pincode (ToDo)

**DELETE** `/pincode/:code`  

Removes data associated with the specified pincode.  

---

### To-Do List:
- [x] Implement `GET /pincode`  
- [ ] Implement `GET /pincode/:code`  
- [x] Implement `POST /pincode`  
- [ ] Implement `PATCH /pincode/:code`  
- [ ] Implement `DELETE /pincode/:code`

---

Feel free to contribute or suggest improvements!
