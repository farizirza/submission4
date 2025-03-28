// Data dummy catatan
const notesData = [
  {
    id: "notes-jT-jjsyz61J8XKiI",
    title: "Welcome to Notes, Dimas!",
    body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
    createdAt: "2022-07-28T10:03:12.594Z",
    archived: false,
  },
  {
    id: "notes-aB-cdefg12345",
    title: "Meeting Agenda",
    body: "Discuss project updates and assign tasks for the upcoming week.",
    createdAt: "2022-08-05T15:30:00.000Z",
    archived: false,
  },
  {
    id: "notes-XyZ-789012345",
    title: "Shopping List",
    body: "Milk, eggs, bread, fruits, and vegetables.",
    createdAt: "2022-08-10T08:45:23.120Z",
    archived: false,
  },
  {
    id: "notes-1a-2b3c4d5e6f",
    title: "Personal Goals",
    body: "Read two books per month, exercise three times a week, learn a new language.",
    createdAt: "2022-08-15T18:12:55.789Z",
    archived: false,
  },
  {
    id: "notes-LMN-456789",
    title: "Recipe: Spaghetti Bolognese",
    body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
    createdAt: "2022-08-20T12:30:40.200Z",
    archived: false,
  },
  {
    id: "notes-QwErTyUiOp",
    title: "Workout Routine",
    body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
    createdAt: "2022-08-25T09:15:17.890Z",
    archived: false,
  },
  {
    id: "notes-abcdef-987654",
    title: "Book Recommendations",
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: "2022-09-01T14:20:05.321Z",
    archived: false,
  },
  {
    id: "notes-zyxwv-54321",
    title: "Daily Reflections",
    body: "Write down three positive things that happened today and one thing to improve tomorrow.",
    createdAt: "2022-09-07T20:40:30.150Z",
    archived: false,
  },
  {
    id: "notes-poiuyt-987654",
    title: "Travel Bucket List",
    body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
    createdAt: "2022-09-15T11:55:44.678Z",
    archived: false,
  },
  {
    id: "notes-asdfgh-123456",
    title: "Coding Projects",
    body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
    createdAt: "2022-09-20T17:10:12.987Z",
    archived: false,
  },
  {
    id: "notes-5678-abcd-efgh",
    title: "Project Deadline",
    body: "Complete project tasks by the deadline on October 1st.",
    createdAt: "2022-09-28T14:00:00.000Z",
    archived: false,
  },
  {
    id: "notes-9876-wxyz-1234",
    title: "Health Checkup",
    body: "Schedule a routine health checkup with the doctor.",
    createdAt: "2022-10-05T09:30:45.600Z",
    archived: false,
  },
  {
    id: "notes-qwerty-8765-4321",
    title: "Financial Goals",
    body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
    createdAt: "2022-10-12T12:15:30.890Z",
    archived: false,
  },
  {
    id: "notes-98765-54321-12345",
    title: "Holiday Plans",
    body: "Research and plan for the upcoming holiday destination.",
    createdAt: "2022-10-20T16:45:00.000Z",
    archived: false,
  },
  {
    id: "notes-1234-abcd-5678",
    title: "Language Learning",
    body: "Practice Spanish vocabulary for 30 minutes every day.",
    createdAt: "2022-10-28T08:00:20.120Z",
    archived: false,
  },
];

// Fungsi untuk menampilkan daftar catatan
function renderNotes(notes) {
  const notesGrid = document.getElementById("notes-grid");
  notesGrid.innerHTML = ""; // Kosongkan grid sebelum render ulang

  notes.forEach((note) => {
    const noteItem = document.createElement("note-item");
    noteItem.setAttribute("id", note.id);
    noteItem.setAttribute("title", note.title);
    noteItem.setAttribute("body", note.body);
    noteItem.setAttribute("created-at", note.createdAt);
    notesGrid.appendChild(noteItem);
  });
}

// Render catatan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderNotes(notesData);
});

// Custom Element: App Bar
class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Default Title";
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #3c2e2e;
          color: white;
          padding: 15px;
          text-align: center;
          font-size: 1.5em;
          font-weight: bold;
        }
      </style>
      <header>${title}</header>
    `;
  }
}

customElements.define("app-bar", AppBar);

// Custom Element: Note Item
class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Untitled";
    const body = this.getAttribute("body") || "No content";
    const createdAt = this.getAttribute("created-at") || "Unknown date";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h3 {
          margin: 0 0 10px;
          font-size: 1.2em;
        }
        p {
          margin: 0;
          font-size: 0.9em;
          color: #555;
        }
        small {
          display: block;
          margin-top: 10px;
          font-size: 0.8em;
          color: #888;
        }
      </style>
      <h3>${title}</h3>
      <p>${body}</p>
      <small>Created at: ${new Date(createdAt).toLocaleString()}</small>
    `;
  }
}

customElements.define("note-item", NoteItem);

// Custom Element: Note Form
class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 12px;
          padding: 8px auto;
          background-color: var(--color-white);
          box-shadow: 0 4px 8px var(--color-shadow);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: 3px solid transparent;
        }
        textarea {
          font-family: 'Poppins';
        }
        input, textarea {
          width: 100%;
          padding: 12px 0;
          margin: 8px 0;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1em;
          transition: border-color 0.3s ease;
        }
        input:focus,
        textarea:focus {
          border-color: #3c2e2e;
          outline: none;
        }
        button {
          width: 100%;
          padding: 12px 0;
          margin: 8px 0;
          background: #3c2e2e;
          color: white;
          font-size: 1em;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color:rgb(90, 80, 80);
        }
        .error-message {
          display: none;
          color: red;
          font-size: 0.8em;
          margin: 4px 0;
        }
      </style>
      <form id="noteForm">
        <div class="form-group">
          <input type="text" id="title" placeholder="Judul Catatan" required />
          <span class="error-message" id="title-error">Judul tidak boleh kosong</span>
        </div>
        <div class="form-group">
          <textarea id="body" placeholder="Isi Catatan" rows="3" required></textarea>
          <span class="error-message" id="body-error">Isi catatan tidak boleh kosong</span>
        </div>
        <button type="submit">Tambah Catatan</button>
      </form>
    `;

    // Referensi elemen-elemen penting
    const titleInput = this.shadowRoot.querySelector("#title");
    const bodyInput = this.shadowRoot.querySelector("#body");
    const titleError = this.shadowRoot.querySelector("#title-error");
    const bodyError = this.shadowRoot.querySelector("#body-error");

    // Event listener untuk validasi real-time
    titleInput.addEventListener("input", () => {
      if (titleInput.value.trim() === "") {
        titleError.style.display = "block";
      } else {
        titleError.style.display = "none";
      }
    });

    bodyInput.addEventListener("input", () => {
      if (bodyInput.value.trim() === "") {
        bodyError.style.display = "block";
      } else {
        bodyError.style.display = "none";
      }
    });

    // Event listener untuk submit form
    this.shadowRoot
      .querySelector("#noteForm")
      .addEventListener("submit", (e) => {
        e.preventDefault();

        // Validasi input
        const title = titleInput.value.trim();
        const body = bodyInput.value.trim();

        if (title && body) {
          // Buat objek catatan baru
          const newNote = {
            id: `notes-${Date.now()}`, // Generate ID unik berdasarkan timestamp
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: false,
          };

          // Tambahkan catatan baru di awal array notesData
          notesData.unshift(newNote);

          // Render ulang daftar catatan
          renderNotes(notesData);

          // Reset form
          titleInput.value = "";
          bodyInput.value = "";
          titleError.style.display = "none";
          bodyError.style.display = "none";

          alert(`Catatan berhasil ditambahkan:\nJudul: ${title}\nIsi: ${body}`);
        } else {
          // Tampilkan pesan error jika ada input yang kosong
          if (title === "") {
            titleError.style.display = "block";
          }
          if (body === "") {
            bodyError.style.display = "block";
          }
        }
      });
  }
}

customElements.define("note-form", NoteForm);
