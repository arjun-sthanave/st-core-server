import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAVIGATION } from "../navigation";

export function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("hero");

  // Scroll when clicking navbar
  const scrollToSection = (id: string, path: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    navigate(path, {
      replace: true,
    });
  };

  // Observe scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (!visible) return;

        const item = NAVIGATION.find(
          (x) => x.id === visible.target.id
        );

        if (!item) return;

        setActiveSection(item.id);

        navigate(item.path, {
          replace: true,
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigate]);

  // Handle refresh or direct visit
  useEffect(() => {
    const item = NAVIGATION.find(
      (x) => x.path === location.pathname
    );

    if (!item) return;

    setTimeout(() => {
      document.getElementById(item.id)?.scrollIntoView();
    }, 100);
  }, []);

  return {
    activeSection,
    scrollToSection,
  };
}