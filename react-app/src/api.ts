const BASE = 'http://localhost.com:5003';

export const api = {
    getCategories: async () => {
        const req = await fetch(`${BASE}/categories`);
        const json = await req.json();
        return json.categories;
    }, 
    postToken: async (email: string, password: string) => {
        const req = await fetch(`${BASE}/user/signin`, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: {
              "Content-type": "application/json",
            },
          });
          return await req.json();
    }
}