import React from "react";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="z-10 absolute overflow-y-scroll left-0 h-[100%] w-[25vw] p-5 pl-8 pb-5 leading-10 nav">
      <img src="/menu/i1.jpg" />

      <Link href="/greetings" scroll={false}>
        <a>
          <img className="" src="/menu/i2.jpg" />
        </a>
      </Link>
      <Link href="/whoamiwhatisthis" scroll={false}>
        <a>
          <img src="/menu/i2(2).jpg" />
        </a>
      </Link>

      <Link href="/introduction" scroll={false}>
        <a>
          <img src="/menu/i3.jpg" />
        </a>
      </Link>

      <img src="/menu/i4.jpg" />

      <Link href="/p1.1/description" scroll={false}>
        <a>
          <img src="/menu/i5.jpg" />
        </a>
      </Link>

      <Link href="/p1.1/processjpgs" scroll={false}>
        <a>
          <img src="/menu/i6.jpg" />
        </a>
      </Link>

      <Link href="/p1.1/final" scroll={false}>
        <a>
          <img src="/menu/i7.jpg" />
        </a>
      </Link>

      <Link href="/p1.1/qrcode" scroll={false}>
        <a>
          <img src="/menu/i8.jpg" />
        </a>
      </Link>

      <img src="/menu/i9.jpg" />

      <Link href="/p1.2/description" scroll={false}>
        <a>
          <img src="/menu/i10.jpg" />
        </a>
      </Link>

      <Link href="/p1.2/processjpgs" scroll={false}>
        <a>
          <img src="/menu/i11.jpg" />
        </a>
      </Link>

      <Link href="/p1.2/final" scroll={false}>
        <a>
          <img src="/menu/i12.jpg" />
        </a>
      </Link>

      <Link href="/p1.2/qrcode" scroll={false}>
        <a>
          <img src="/menu/i13.jpg" />
        </a>
      </Link>

      <a>
        <img src="/menu/i14.jpg" />
      </a>

      <Link href="/p2.1/description" scroll={false}>
        <a>
          <img src="/menu/i15.jpg" />
        </a>
      </Link>

      <Link href="/p2.1/processjpgs" scroll={false}>
        <a>
          <img src="/menu/i16.jpg" />
        </a>
      </Link>

      <Link href="/p2.1/final" scroll={false}>
        <a>
          <img src="/menu/i17.jpg" />
        </a>
      </Link>

      <Link href="/p2.1/qrcode" scroll={false}>
        <a>
          <img src="/menu/i18.jpg" />
        </a>
      </Link>
    </div>
  );
};
