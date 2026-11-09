import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const CheckBox: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center className cursor-pointer select-none gap-3">
      {/* Скрытый дефолтный чекбокс для доступности (accessibility) */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      
      {/* Контейнер слайдера */}
      <div className="relative w-11 h-6 bg-(--text) peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--osn-or)"></div>
      
    </label>
  );
};
