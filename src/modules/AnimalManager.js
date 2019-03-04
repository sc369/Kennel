import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/animals/${id}`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/animals/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/animals`).then(e => e.json());
    },
    post(newAnimal) {
        return fetch(`${Settings.remoteURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        }).then(data => data.json())
    }
}

