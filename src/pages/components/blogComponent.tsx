import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";

interface Section {
  id: string;
  title: string;
  level: "h2" | "h3";
}

export default function BlogPost({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3");
    console.log("Found headings:", headings.length); // Debug log

    const sectionsList: Section[] = Array.from(headings).map((heading) => {
      if (!heading.id) {
        const generatedId =
          heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
        console.log("Generated ID for heading:", generatedId); // Debug log
        heading.id = generatedId;
      }

      // Ensure scroll margin is applied
      const scrollMargin = "100px";
      (heading as HTMLElement).style.scrollMarginTop = scrollMargin;
      console.log(
        `Applied scroll margin ${scrollMargin} to heading:`,
        heading.id
      ); // Debug log

      return {
        id: heading.id,
        title: heading.textContent || "",
        level: heading.tagName.toLowerCase() as "h2" | "h3",
      };
    });
    setSections(sectionsList);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-70px 0px -70% 0px",
      }
    );
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (!element) {
      console.error("Target element not found:", id); // Debug log
      return;
    }

    try {
      const headerHeight = 80; // You might want to calculate this dynamically
      const elementPosition = element.getBoundingClientRect();
      const offsetTop = window.pageYOffset + elementPosition.top - headerHeight;

      console.log("Scroll details:", {
        // Debug log
        elementId: id,
        elementTop: elementPosition.top,
        headerHeight,
        calculatedOffset: offsetTop,
      });

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Update URL after scroll is complete
      setTimeout(() => {
        window.history.pushState(null, "", `#${id}`);
        console.log("URL updated to:", `#${id}`); // Debug log
      }, 100);
    } catch (error) {
      console.error("Error during scroll:", error); // Debug log
    }
  };

  return (
    <Layout title={title} description={description}>
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ flex: 1, padding: "2rem", maxWidth: "800px" }}>
          {children}
        </div>
        <div
          style={{
            width: "250px",
            position: "sticky",
            top: "2rem",
            height: "fit-content",
            padding: "1rem",
            marginTop: "2rem",
          }}
        >
          <nav className="table-of-contents">
            <h4 style={{ marginBottom: "1rem", color: "#444" }}>Contents</h4>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                style={{
                  display: "block",
                  padding: "0.4rem 0",
                  color: activeSection === section.id ? "#3578e5" : "#666",
                  textDecoration: "none",
                  fontSize: section.level === "h2" ? "1rem" : "0.9rem",
                  borderLeft: `2px solid ${
                    activeSection === section.id ? "#3578e5" : "transparent"
                  }`,
                  paddingLeft: section.level === "h2" ? "1rem" : "1.5rem",
                  transition: "all 0.2s ease",
                }}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </Layout>
  );
}
