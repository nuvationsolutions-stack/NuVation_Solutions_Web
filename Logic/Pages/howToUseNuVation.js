const guides = [
    {
        topic: "Getting started",
        title: "Create an account and sign in",
        summary: "Choose the correct account type and enter NuVation securely.",
        roles: ["owner", "administrator", "employee", "professional"],
        steps: [
            "Open Create New User from the sign-in page.",
            "Choose Business owner only when creating and controlling your own business workspace. Choose Employee or administrator when you expect an invitation. Choose Professional for the separate read-only professional workspace.",
            "Enter an email address you control and a unique password that meets the displayed requirements.",
            "Read and accept the current Terms of Service and Privacy Policy, then select Create Account.",
            "Return to Sign in and use the same email and password. Never share your password or one-time code."
        ],
        note: "Creating a login does not purchase a plan. Access and available modules depend on your business membership, permissions and active prepaid products. The same steps apply on phones, tablets, laptops and desktops."
    },
    {
        topic: "Getting started",
        title: "Understand the dashboard",
        summary: "Use the dashboard as the starting point for authorised work.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Sign in and select the business workspace you are authorised to use.",
            "Read the summary cards for customers, stock, documents and recent activity.",
            "Select a module card to open that area of the ERP.",
            "Use the account icon for business settings, your account, team access and sign out.",
            "If a module or action is missing, ask the owner to review your permissions and the business plan."
        ],
        note: "A blank or restricted dashboard does not grant hidden access. NuVation only displays and accepts operations authorised for the current role.",
        images: [{ heading: "Dashboard summaries", src: "/Assets/Help/dashboard-summary.png", alt: "NuVation dashboard summary cards", caption: "Read the business summaries first, then open the module needed for the task." }]
    },
    {
        topic: "Customers",
        title: "Create a customer",
        summary: "Add a customer record for invoices, quotes and business administration.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Customers from the dashboard.",
            "Select Add Customer.",
            "Enter the customer name and only the contact, address, VAT or CIPC information your business lawfully needs.",
            "Check the spelling and accuracy, then select Save Customer.",
            "Open View Customers to confirm the new record."
        ],
        note: "Your business is responsible for its own privacy notices, lawful purpose, accuracy and retention rules for customer information.",
        images: [{ heading: "Choose a customer action", src: "/Assets/Help/customers-actions.png", alt: "Customer area with create, edit and view options", caption: "Create a new record or choose the separate view and edit areas for existing customers." }]
    },
    {
        topic: "Customers",
        title: "View, edit or delete a customer",
        summary: "Correct customer details or remove a record when appropriate.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Customers, then choose the relevant view or management option.",
            "Search for the customer by name or contact information.",
            "Use View when you only need to read the record.",
            "Use Edit Customer when your permission allows changes, update only the incorrect fields and save once.",
            "Use Delete only when the record is no longer required and the confirmation accurately describes what you intend to remove."
        ],
        note: "Deleting or re-adding records does not replenish a monthly-created allowance. When an identity is capacity-protected, contact NuVation support for a genuine correction rather than converting one real entity into another."
    },
    {
        topic: "Inventory",
        title: "Add an inventory item",
        summary: "Record a product or material with stock and selling details.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Inventory and select Add Inventory.",
            "Choose the inventory type and enter a clear item name.",
            "Add an optional description, selling price, current stock quantity, low-stock warning and product or barcode reference.",
            "Review quantities and monetary values carefully.",
            "Select Save Inventory Item once and confirm the item appears in the inventory list."
        ],
        note: "Negative prices and quantities are rejected. Stock movements created by invoices or supplier receipts are calculated by the server.",
        images: [{ heading: "Inventory workspace", src: "/Assets/Help/inventory-actions.png", alt: "Inventory workspace with add and management options", caption: "Add a new item or open the relevant management area for existing stock." }]
    },
    {
        topic: "Inventory",
        title: "View, update or remove inventory",
        summary: "Maintain item descriptions and stock records without losing accountability.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Inventory and choose View Inventory to read the current list.",
            "Use search and filters to find the required item.",
            "Open the separate Edit Inventory area when your permission includes changes.",
            "Correct metadata or stock values, then save once.",
            "Delete only the intended item after checking whether documents or cost records depend on it."
        ],
        note: "Some roles can view and add inventory without receiving edit or delete permission."
    },
    {
        topic: "Invoices and quotes",
        title: "Create an invoice",
        summary: "Build an invoice from an authorised customer and recorded items.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Invoicing and select Create Invoice.",
            "Choose the customer and confirm the prepared-for details.",
            "Add each product or service, quantity and entered price.",
            "Choose the correct VAT treatment for your business and verify all totals.",
            "Save once. NuVation records the calculation snapshot and reduces recorded product stock where applicable."
        ],
        note: "NuVation is a bookkeeping and record-keeping tool. Have tax, accounting and legal classifications independently checked by an appropriately registered professional."
    },
    {
        topic: "Invoices and quotes",
        title: "Edit, pay, print or delete an invoice",
        summary: "Manage an existing invoice and its payment history safely.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open View Invoices and select the correct invoice number.",
            "Use Edit to correct allowed invoice details; totals and payment status are recalculated by the server.",
            "Record a payment with its actual amount and payment date.",
            "Use Print or Save PDF to create the customer-facing document without printing the surrounding ERP interface.",
            "Delete a payment or invoice only after reviewing the warning and its bookkeeping or stock consequences."
        ],
        note: "The server prevents duplicate requests, overpayment races and conflicting payment/deletion operations."
    },
    {
        topic: "Invoices and quotes",
        title: "Create, edit and convert a quote",
        summary: "Prepare a quote and convert an accepted quote into one invoice.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Invoicing and select Create Quote.",
            "Choose a customer, add quote items and confirm the selected VAT treatment and expiry date.",
            "Save the quote once, then use View Quotes to edit or print it.",
            "When the customer accepts, choose Convert to Invoice.",
            "Confirm the resulting invoice before recording payment or sending its PDF."
        ],
        note: "A converted quote remains linked to its invoice and cannot be converted repeatedly into additional invoices."
    },
    {
        topic: "Bookkeeping",
        title: "Record income or an expense",
        summary: "Add a manual bookkeeping transaction with a clear category and reference.",
        roles: ["owner", "administrator"],
        steps: [
            "Open Bookkeeping and choose Add Income or Add Expense.",
            "Enter the date, description, category, amount and useful reference.",
            "Confirm whether the record is separate from automatically generated invoice-payment entries.",
            "Save once and review it in View Transactions.",
            "Correct or remove only the intended manual record."
        ],
        note: "Do not duplicate an invoice payment as manual income unless your chosen bookkeeping method genuinely requires a separate record."
    },
    {
        topic: "Bookkeeping",
        title: "Review receivables and statements",
        summary: "See outstanding customer balances and produce draft records for review.",
        roles: ["owner", "administrator", "professional"],
        steps: [
            "Open Receivables to review invoices with remaining balances.",
            "Use customer and date filters to narrow the list.",
            "Open Bookkeeping Statement for a period-based draft summary.",
            "Check every source document and classification before relying on a total.",
            "Print or share records only after the business has completed its own review."
        ],
        note: "Professional accounts receive authorised read-only records; NuVation does not verify their identity, qualifications or authority."
    },
    {
        topic: "Suppliers",
        title: "Create and maintain suppliers",
        summary: "Record supplier contact and ordering information.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Supplier Manager and choose Add Supplier.",
            "Enter only the supplier information your business needs and may lawfully process.",
            "Save once and confirm the supplier in Manage Suppliers.",
            "Use the management screen to correct details or remove an obsolete supplier.",
            "Keep supporting supplier documents outside NuVation where your own procedure requires them."
        ]
    },
    {
        topic: "Suppliers",
        title: "Manage supplier orders and deliveries",
        summary: "Track orders and receive stock without duplicating effects.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Supplier Manager and create the required supplier order or delivery record.",
            "Choose the correct supplier and inventory items.",
            "Record ordered and received quantities accurately.",
            "Confirm receipt once; NuVation updates affected inventory through the protected server transaction.",
            "Use Manage Deliveries to review the result and its status."
        ],
        note: "Repeated receipt requests are deduplicated, but the person capturing the delivery remains responsible for checking the physical goods."
    },
    {
        topic: "Calendar and deliveries",
        title: "Create and manage an appointment",
        summary: "Schedule a meeting, booking or customer appointment.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Calendar & Bookings and select Add Appointment.",
            "Enter a clear title, dates, times, location and relevant customer information.",
            "Save and confirm the appointment on the calendar.",
            "Use Manage Calendar to update or remove it when plans change.",
            "Notify participants through your own communication channel; NuVation does not send marketing messages."
        ],
        images: [{ heading: "See the complete month", src: "/Assets/Help/calendar-month.png", alt: "NuVation calendar showing the complete month", caption: "Use the month view to confirm dates, then search or filter the appointment list below." }]
    },
    {
        topic: "Calendar and deliveries",
        title: "Schedule and track a customer delivery",
        summary: "Connect an invoice to a planned delivery and available vehicle.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Deliveries and choose Add Customer Delivery.",
            "Select the correct invoice and delivery date.",
            "Choose a recorded vehicle where appropriate and add practical delivery information.",
            "Save, then use Manage Customer Deliveries to update progress.",
            "Use the delivery report as an operational record and verify it before relying on it."
        ],
        note: "NuVation records assignments but does not block a vehicle merely because it appears on another job. Your business decides actual availability and fitness for use."
    },
    {
        topic: "Fleet and assets",
        title: "Record vehicles, machines and equipment",
        summary: "Maintain reusable operational resources without treating them as stock.",
        roles: ["owner", "administrator", "employee"],
        steps: [
            "Open Fleet & Maintenance and select Add Vehicle or Equipment.",
            "Choose the correct resource kind, such as vehicle, machine or equipment.",
            "Enter an identifying name, registration or internal reference and relevant details.",
            "Save and confirm it under Manage Vehicles and Equipment.",
            "Update its operational information when your own inspection or procedure requires it."
        ],
        note: "Fleet resources are reusable and do not deplete like inventory. NuVation does not certify roadworthiness, safety or availability."
    },
    {
        topic: "Fleet and assets",
        title: "Record maintenance and business assets",
        summary: "Track maintenance history and draft asset-register information.",
        roles: ["owner", "administrator"],
        steps: [
            "Use Fleet & Maintenance to add a maintenance record against the correct resource.",
            "Record dates, work performed, costs and the current operational status accurately.",
            "Use Asset Register for business equipment and depreciation-related records.",
            "Create or update the asset, then review the draft Asset Report.",
            "Have depreciation, disposal, tax and accounting treatment checked professionally."
        ]
    },
    {
        topic: "Projects and jobs",
        title: "Create a project and connected job",
        summary: "Plan work, assign accountability and connect operational resources.",
        roles: ["owner", "administrator"],
        steps: [
            "Open Project Manager and create a project when the selected work package includes projects.",
            "Enter a clear title, description, dates and customer or location context.",
            "Create a connected job and select the responsible active employee or the owner personally.",
            "Assign recorded vehicles, machines or equipment when useful for accountability.",
            "Review the project and job lists to confirm every relationship."
        ],
        note: "Jobs & Job Cards and Project Manager, Jobs & Job Cards are alternative work packages. A business selects one, not both."
    },
    {
        topic: "Projects and jobs",
        title: "Start and complete a job card",
        summary: "Let an assigned employee or owner record the work actually performed.",
        roles: ["owner", "employee"],
        steps: [
            "Open My Jobs and select a job assigned to your exact membership identity.",
            "Start the job to create or update the connected job card.",
            "Record work completed, materials used, issues found and follow-up requirements.",
            "Finish and submit the job card only when the captured work is accurate.",
            "The owner or authorised reviewer can use the saved identity and name snapshots for accountability."
        ],
        note: "Owners may assign themselves and complete their own job cards. Users cannot start or complete another person's unassigned job.",
        images: [
            { heading: "Enter the job details", src: "/Assets/Help/job-details.png", alt: "Job title, invoice, planned start and due-date controls", caption: "Enter the job identity and schedule before assigning it." },
            { heading: "Assign the responsible person", src: "/Assets/Help/job-assignment.png", alt: "Job employee assignment control with the owner selected as an available option", caption: "Choose the employee responsible for the work, or select yourself as the owner." }
        ]
    },
    {
        topic: "Analytics",
        title: "Use Advanced Metrics & Analytics",
        summary: "Read operational trends without treating them as professional advice.",
        roles: ["owner", "administrator"],
        steps: [
            "Open Advanced Metrics & Analytics from the dashboard when the module is active.",
            "Choose the relevant period and business area.",
            "Compare totals and trends with their underlying invoices, payments, stock and records.",
            "Investigate unusual changes before making a business decision.",
            "Export or discuss figures only after checking their completeness and classification."
        ]
    },
    {
        topic: "Plans and limits",
        title: "Choose a base plan and optional modules",
        summary: "Build a prepaid selection without automatic renewal.",
        roles: ["owner"],
        steps: [
            "Open Plan, add-ons & limits from My Account or Business Settings.",
            "When no base plan is active, choose a 1, 3, 6 or 12-month base period.",
            "Select one work package if needed and add only the optional modules the business will use.",
            "Review included base allowances, optional limits, exact access dates and the complete prepaid total.",
            "Confirm the purchase-specific legal statements only after every product, price and expiry is correct."
        ],
        note: "Products terminate automatically on their displayed expiry dates. NuVation does not renew or charge them automatically.",
        images: [{ heading: "Review the complete selection", src: "/Assets/Help/subscription-base.png", alt: "Subscription builder base plan and included allowances", caption: "Review the included base plan before selecting a period or any additions." }]
    },
    {
        topic: "Plans and limits",
        title: "Add seats, modules or capacity to an active plan",
        summary: "Buy additions that remain inside the exact base-plan period.",
        roles: ["owner"],
        steps: [
            "Open Plan, add-ons & limits while the base plan is active.",
            "Review the displayed remaining base-plan time.",
            "Choose an available fixed duration only when that complete duration fits, or choose Match main plan for the exact remaining period.",
            "Review partial-period pricing and allowance, complete later months and the exact total.",
            "Do not place another open order for the same capacity or repurchase a module that is already active."
        ],
        note: "An addition can never extend beyond the base plan. The base plan itself cannot be stacked or extended while active."
    },
    {
        topic: "Settings and security",
        title: "Update business settings and branding",
        summary: "Maintain business, address, banking, document and logo information.",
        roles: ["owner", "administrator"],
        steps: [
            "Open Business Settings from the account menu.",
            "Use the section links for business details, address, banking, branding and document status.",
            "Enter accurate information and save once; the button disables while the request is running.",
            "Upload only an allowed genuine image file for the private business logo.",
            "Generate a test invoice or quote PDF and confirm the details before sending documents to customers."
        ],
        note: "Do not upload secrets or identity documents as a logo. NuVation validates the file type, signature and size on the server.",
        images: [{ heading: "Business settings", src: "/Assets/Help/settings-business.png", alt: "NuVation business details settings", caption: "Open one section at a time and save only after checking the entered details." }]
    },
    {
        topic: "Settings and security",
        title: "Invite people and assign permissions",
        summary: "Give each person only the access required for their work.",
        roles: ["owner", "administrator"],
        steps: [
            "Open Team & Access from Business Settings.",
            "Invite the person's correct email and choose the intended role.",
            "Grant only the module and action permissions they genuinely require.",
            "Ask the invitee to create or use their own login and accept the invitation.",
            "Review memberships regularly and revoke access promptly when work or responsibility ends."
        ],
        note: "Never share one login between people. Separate identities make job, document and security investigations understandable."
    },
    {
        topic: "Settings and security",
        title: "Respond to an error or suspected security problem",
        summary: "Preserve useful evidence without exposing passwords or private data.",
        roles: ["owner", "administrator", "employee", "professional"],
        steps: [
            "Stop repeating the action if it could duplicate, delete or financially change a record.",
            "Write down the page, date and time, intended action and exact friendly message.",
            "Check whether the correct business, role, permission, product and allowance were selected.",
            "Contact NuVation when the problem remains or when you suspect unauthorised access.",
            "Change exposed passwords through the proper account process and never send passwords, tokens or complete payment details to support."
        ],
        note: "NuVation records selected plain-English security events for investigation. It does not intentionally expose raw database or provider errors to users."
    },
    {
        topic: "Role guides",
        title: "Business owner responsibilities",
        summary: "Control the workspace, purchases, permissions and business accuracy.",
        roles: ["owner"],
        steps: [
            "Keep ownership credentials private and use a unique password.",
            "Maintain correct business, banking, document and privacy information.",
            "Choose prepaid products and monitor exact expiry dates and usage limits.",
            "Invite separate users, grant minimum permissions and review access.",
            "Check business outputs and obtain legal, tax, accounting or other professional advice when required."
        ]
    },
    {
        topic: "Role guides",
        title: "Administrator and employee access",
        summary: "Understand delegated actions and individual accountability.",
        roles: ["administrator", "employee"],
        steps: [
            "Use only your own login and the business that invited you.",
            "Administrators perform only the management actions granted by the owner.",
            "Employees use only the modules and operations required for assigned work.",
            "Job and job-card actions are tied to the assigned membership identity.",
            "Ask the owner to correct permissions instead of attempting to bypass a missing action."
        ]
    },
    {
        topic: "Role guides",
        title: "Professional read-only access",
        summary: "Review specifically authorised business records without changing them.",
        roles: ["professional"],
        steps: [
            "Create a Professional account using your own identity and login.",
            "Review and accept a business invitation before expecting records.",
            "Open the Professional workspace and select the authorising business.",
            "Use the available filters and read-only records for the agreed purpose.",
            "The business must revoke access when the engagement or lawful purpose ends."
        ],
        note: "NuVation does not verify a professional's identity, qualifications, registration, authority or trustworthiness. The business must perform its own checks."
    }
];

const guideVisuals = {
    "Create an invoice": [
        { heading: "Choose an invoicing action", src: "/Assets/Help/invoicing-actions.png", alt: "Invoicing workspace actions", caption: "Start a new invoice or open the relevant management area for existing documents." }
    ],
    "Edit, pay, print or delete an invoice": [
        { heading: "Find the correct invoice", src: "/Assets/Help/invoice-list.png", alt: "Invoice list and actions", caption: "Search for the exact invoice before editing, recording payment, printing or deleting." }
    ],
    "Create, edit and convert a quote": [
        { heading: "Enter the quote information", src: "/Assets/Help/quote-information.png", alt: "Quote number, date and expiry fields", caption: "Confirm the quote number and dates first." },
        { heading: "Add quote items", src: "/Assets/Help/quote-items.png", alt: "Quote item search, quantity and price controls", caption: "Select the item, quantity and entered selling price." },
        { heading: "Check the quote total", src: "/Assets/Help/quote-totals.png", alt: "Quote VAT method and totals", caption: "Verify the VAT method and the exact amount the customer will pay." }
    ],
    "Record income or an expense": [
        { heading: "Bookkeeping workspace", src: "/Assets/Help/bookkeeping-actions.png", alt: "Bookkeeping action cards", caption: "Choose the relevant bookkeeping action for the task, then follow the labelled transaction fields and check the entry before saving." }
    ],
    "Review receivables and statements": [
        { heading: "Review outstanding balances", src: "/Assets/Help/receivables-summary.png", alt: "Receivables summary", caption: "Check the totals before opening an invoice or recording any payment." }
    ],
    "Create and maintain suppliers": [
        { heading: "Supplier workspace", src: "/Assets/Help/supplier-actions.png", alt: "Supplier Manager options", caption: "Choose whether to create, view or manage a supplier record." }
    ],
    "Create and manage an appointment": [
        { heading: "Add an appointment", src: "/Assets/Help/add-appointment.png", alt: "Appointment creation form", caption: "Capture the schedule and practical appointment details accurately." }
    ],
    "Schedule and track a customer delivery": [
        { heading: "Delivery workspace", src: "/Assets/Help/deliveries-overview.png", alt: "Customer delivery options", caption: "Add a delivery or open the management area to review its progress." }
    ],
    "Record vehicles, machines and equipment": [
        { heading: "Fleet and equipment workspace", src: "/Assets/Help/fleet-actions.png", alt: "Fleet and equipment options", caption: "Choose the exact resource or maintenance task you need." }
    ],
    "Record maintenance and business assets": [
        { heading: "Asset Register workspace", src: "/Assets/Help/asset-actions.png", alt: "Asset Register options", caption: "Create, review and report on the correct business asset." }
    ],
    "Create a project and connected job": [
        { heading: "Project workspace", src: "/Assets/Help/projects-overview.png", alt: "Project Manager options", caption: "Start with the project, then connect the related jobs." }
    ],
    "Invite people and assign permissions": [
        { heading: "Team and access", src: "/Assets/Help/team-summary.png", alt: "Team access summary", caption: "Review the team summary before inviting people or changing access." }
    ]
};

const topicContainer = document.querySelector("#helpTopics");
const sectionContainer = document.querySelector("#helpSections");
const searchInput = document.querySelector("#helpSearch");
const roleSelect = document.querySelector("#helpRole");
const resultCount = document.querySelector("#helpResultCount");

let selectedTopic = "All topics";

function element(tagName, className, text) {
    const node = document.createElement(tagName);
    if (className) {
        node.className = className;
    }
    if (text !== undefined) {
        node.textContent = text;
    }
    return node;
}

function roleLabel(role) {
    return {
        owner: "Owner",
        administrator: "Administrator",
        employee: "Employee",
        professional: "Professional"
    }[role] || role;
}

function buildTopics() {
    const topics = ["All topics", ...new Set(guides.map((guide) => guide.topic))];

    topics.forEach((topic) => {
        const button = element("button", "helpTopicButton", topic);
        button.type = "button";
        button.setAttribute("aria-current", String(topic === selectedTopic));
        button.addEventListener("click", () => {
            selectedTopic = topic;
            buildTopics();
            renderGuides();
        });
        topicContainer.appendChild(button);
    });
}

function searchableText(guide) {
    return [
        guide.topic,
        guide.title,
        guide.summary,
        ...(guide.steps || []),
        guide.note || "",
        ...guide.roles.map(roleLabel)
    ].join(" ").toLowerCase();
}

function matchesFilters(guide) {
    const query = searchInput.value.trim().toLowerCase();
    const role = roleSelect.value;
    const topicMatches = selectedTopic === "All topics" || guide.topic === selectedTopic;
    const roleMatches = role === "all" || guide.roles.includes(role);
    const searchMatches = !query || searchableText(guide).includes(query);
    return topicMatches && roleMatches && searchMatches;
}

function createGuide(guide) {
    const details = element("details", "helpGuide");
    const summary = document.createElement("summary");
    const summaryText = document.createElement("span");
    summaryText.appendChild(element("span", "helpGuideTitle", guide.title));
    summaryText.appendChild(element("span", "helpGuideSummary", guide.summary));
    summary.appendChild(summaryText);
    details.appendChild(summary);

    const body = element("div", "helpGuideBody");
    const stepsSection = element("section", "helpSteps");
    stepsSection.appendChild(element("h3", "", "Follow these steps"));

    const list = document.createElement("ol");
    guide.steps.forEach((step) => list.appendChild(element("li", "", step)));
    stepsSection.appendChild(list);

    if (guide.note) {
        stepsSection.appendChild(element("p", "helpNote", guide.note));
    }

    const badges = element("div", "helpRoles");
    badges.setAttribute("aria-label", "Relevant roles");
    guide.roles.forEach((role) => {
        badges.appendChild(element("span", "helpRoleBadge", roleLabel(role)));
    });
    stepsSection.appendChild(badges);
    body.appendChild(stepsSection);

    const visualImages = [...(guide.images || []), ...(guideVisuals[guide.title] || [])];
    if (visualImages.length) {
        const gallery = element("section", "helpScreenshotGallery");
        gallery.setAttribute("aria-label", "Visual walkthrough");

        visualImages.forEach((imageDetails) => {
            const screenshot = element("figure", "helpScreenshot");
            screenshot.appendChild(element("h3", "", imageDetails.heading));
            const imageLink = document.createElement("a");
            imageLink.className = "helpScreenshotLink";
            imageLink.href = imageDetails.src;
            imageLink.target = "_blank";
            imageLink.rel = "noopener";
            imageLink.setAttribute("aria-label", `Open full-size image: ${imageDetails.heading}`);
            const image = document.createElement("img");
            image.src = imageDetails.src;
            image.alt = imageDetails.alt;
            image.loading = "lazy";
            image.decoding = "async";
            imageLink.appendChild(image);
            screenshot.appendChild(imageLink);
            screenshot.appendChild(element("p", "", imageDetails.caption));
            gallery.appendChild(screenshot);
        });

        body.appendChild(gallery);
    }

    details.appendChild(body);
    return details;
}

function renderGuides() {
    sectionContainer.replaceChildren();
    const filtered = guides.filter(matchesFilters);

    resultCount.textContent = filtered.length === 1
        ? "1 guide found."
        : `${filtered.length} guides found.`;

    if (filtered.length === 0) {
        sectionContainer.appendChild(
            element("p", "helpEmpty", "No guide matches that search. Try a shorter task name or choose Everyone.")
        );
        return;
    }

    filtered.forEach((guide) => sectionContainer.appendChild(createGuide(guide)));
}

searchInput.addEventListener("input", renderGuides);
roleSelect.addEventListener("change", renderGuides);

buildTopics();
renderGuides();
