import create from 'zustand';
import axios from 'axios';

const [useUserStore] = create( (set, get) => ({
    user: {},
    userId: null,
    token: null,
    api: {
        all: async () => {
            const token = await get().api.getToken();
            
            const res = await axios.get('/api/user');
            return res;
        },
        find: async (email) => {
            const token = await get().api.getToken();

            const res = await axios.get('/api/user/find', { params: { token: token, email: email } });

            if (res.status == 200)
                set({ user: res.data.user, userId: res.data.id });
            return res;
        },
        create: async (user) => {
            const token = await get().api.getToken();

            const res = await axios.post('/api/user', { token: token, ...user } );
            console.log(res);
            if (res.status == 201)
                set({ user: res.data.user, userId: res.data.id });
            return res;
        },
        edit: async (user) => {
            const token = await get().api.getToken();

            user.id = get().userId;
            const res = await axios.put('/api/user', { token: token, ...user } );

            if (res.status == 202)
                set({ user: res.data.user });
            return res;
        },
        getToken: async () => {
            if (get().token)
                return get().token;

            const res = await axios.get('/api/token');

            set({ token: res.status == 200 ? res.data.token : null });
            return get().token;
        },
        clear: () => {
            set({ user: {} });
        }
    }
}));

export default useUserStore;