/*
 * Copyright 2014-present Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho.config;

import static android.os.Build.VERSION.SDK_INT;
import static android.os.Build.VERSION_CODES.ICE_CREAM_SANDWICH;
import static android.os.Build.VERSION_CODES.JELLY_BEAN_MR1;
import static android.os.Build.VERSION_CODES.LOLLIPOP_MR1;

import androidx.annotation.Nullable;
import com.facebook.litho.BuildConfig;
import com.facebook.yoga.YogaLogger;

/**
 * Hi there, traveller! This configuration class is not meant to be used by end-users of Litho. It
 * contains mainly flags for features that are either under active development and not ready for
 * public consumption, or for use in experiments.
 *
 * These values are safe defaults and should not require manual changes.
 */
public class ComponentsConfiguration {

  public static YogaLogger YOGA_LOGGER;

  /**
   * Indicates whether this is an internal build. Note that the implementation
   * of <code>BuildConfig</code> that this class is compiled against may not be
   * the one that is included in the
   * APK. See: <a
   * href="http://facebook.github.io/buck/rule/android_build_config.html">android_build_config</a>.
   */
  public static final boolean IS_INTERNAL_BUILD = BuildConfig.IS_INTERNAL_BUILD;

  /** Indicates that the incremental mount helper is required for this build. */
  public static final boolean USE_INCREMENTAL_MOUNT_HELPER =
      BuildConfig.USE_INCREMENTAL_MOUNT_HELPER;

  /** Whether transitions are supported for this API version. */
  public static final boolean ARE_TRANSITIONS_SUPPORTED = (SDK_INT >= ICE_CREAM_SANDWICH);

  /** Whether we can access properties in Settings.Global for animations. */
  public static final boolean CAN_CHECK_GLOBAL_ANIMATOR_SETTINGS = (SDK_INT >= JELLY_BEAN_MR1);

  /** Whether we need to account for lack of synchronization while accessing Themes. */
  public static final boolean NEEDS_THEME_SYNCHRONIZATION = (SDK_INT <= LOLLIPOP_MR1);

  /** The default priority for threads that perform background layout calculations. */
  public static final int DEFAULT_BACKGROUND_THREAD_PRIORITY = 5;

  /** The default priority for threads that perform background sections change set calculations. */
  public static final int DEFAULT_CHANGE_SET_THREAD_PRIORITY = 0;

  /**
   * Option to enabled debug mode. This will save extra data asscociated with each node and allow
   * more info about the hierarchy to be retrieved. Used to enable stetho integration. It is highly
   * discouraged to enable this in production builds. Due to how the Litho releases are distributed
   * in open source IS_INTERNAL_BUILD will always be false. It is therefore required to override
   * this value using your own application build configs. Recommended place for this is in a
   * Application subclass onCreate() method.
   */
  public static boolean isDebugModeEnabled = IS_INTERNAL_BUILD;

  /**
   * Debug option to highlight interactive areas in mounted components.
   */
  public static boolean debugHighlightInteractiveBounds = false;

  /**
   * LithoView overlay showing whether its ComponentTree was computed on UI thread (red) or bg
   * thread (green).
   */
  public static boolean enableLithoViewDebugOverlay = false;

  /**
   * Debug option to highlight mount bounds of mounted components.
   */
  public static boolean debugHighlightMountBounds = false;

  /**
   * Populates additional metadata to find mounted components at runtime. Defaults to the presence
   * of an <pre>IS_TESTING</pre> system property at startup but can be overridden at runtime.
   */
  public static boolean isEndToEndTestRun = System.getProperty("IS_TESTING") != null;

  /**
   * By default end-to-end tests will disable transitions and this flag lets to explicitly enable
   * transitions to test animation related behavior.
   */
  public static boolean forceEnableTransitionsForInstrumentationTests = false;

  /** Enable exception delegation to {@link com.facebook.litho.annotations.OnError}. */
  public static boolean enableOnErrorHandling = false;

  /**
   * If false, global keys will not be generated (litho level state updates won't work). It's highly
   * discouraged to to change this to false, unless you handle all your updates outside of the litho
   * framework
   */
  public static boolean useGlobalKeys = true;

  /** If true then we'll lazily initialize the LayoutStateOutputIdCalculator */
  public static boolean lazilyInitializeLayoutStateOutputIdCalculator = false;

  /** Whether to unmount all contents of LithoView when its ComponentTree is set to null. */
  public static boolean unmountAllWhenComponentTreeSetToNull = false;

  /**
   * Configuration for creating a thread pool of threads used for background layout. If null, a
   * single default thread will be used for background layout.
   */
  public static @Nullable LayoutThreadPoolConfiguration threadPoolForBackgroundThreadsConfig = null;

  /** If true, a single thread pool will be used instead of creating one per RecyclerBinder. */
  public static boolean useSingleThreadPool = false;

  /** Configuration for asynchronous state update */
  public static boolean updateStateAsync = false;

  /**
   * If false, we won't create state handlers. It's highly discouraged to to change this to false,
   * unless you handle all your updates outside of the litho framework
   */
  public static boolean useStateHandlers = true;

  /** Default for ComponentHost#hasOverlappingRendering. */
  public static boolean hostHasOverlappingRendering = true;

  public static boolean prewarmImageTexture = false;

  /**
   * If true, the async range calculation isn't blocked on the first item finishing layout and it
   * will schedule one layout per bg thread during init range.
   */
  public static boolean asyncInitRange = false;

  /**
   * If true, the async range calculation isn't blocked on the first item finishing layout and it
   * will schedule as many bg layouts as it can while init range completes.
   */
  public static boolean bgScheduleAllInitRange;

  /**
   * If true, a layout for the same ComponentTree will be calculated on a single thread at the same
   * time.
   */
  public static boolean useSharedLayoutStateFuture = false;

  /**
   * If non-null, a thread pool will be used for async layouts instead of a single layout thread.
   */
  public static @Nullable LayoutThreadPoolConfiguration threadPoolConfiguration = null;

  public static boolean enableThreadTracingStacktrace = false;

  /**
   * Whether incremental mount should also be done when the LithoView is not visible at all (i.e. so
   * that all of the mount items should be unmounted).
   */
  public static boolean incrementalMountWhenNotVisible = false;

  /** Whether all drawables are eligible for wrapping into DisplayListDrawables */
  public static boolean useDisplayListForAllDrawables = false;

  /**
   * Whether the background thread that's currently running the layout should have its priority
   * raised to the thread priority of the UI thread.
   */
  public static boolean inheritPriorityFromUiThread = false;

  /**
   * Whether the OnShouldCreateLayoutWithNewSizeSpec is used with Layout Spec with size spec. This
   * will also disable the associated layout caching.
   */
  public static boolean enableShouldCreateLayoutWithNewSizeSpec = false;

  /**
   * Whether we allow animating drawables' properties (other than bounds)
   */
  public static boolean allowAnimatingDrawables = false;

  /** Assign transition keys to all LayoutOutputs, this enables Transition.allLayout() */
  public static boolean assignTransitionKeysToAllOutputs = false;

  public static boolean createPhantomLayoutOutputsForTransitions = false;

  /**
   * Enables more smart approach to processing autogenerated transition ids in
   * TransitionManager.setupTransitions(), taking into account whether there are transitions that
   * target all layout, and the fact that appear/disappear animations cannot be defined for
   * autogenerated ids
   */
  public static boolean onlyProcessAutogeneratedTransitionIdsWhenNecessary = false;

  /** Whether the refactored implementation of nested tree resolution should be used. */
  public static boolean isNestedTreeResolutionExperimentEnabled = false;

  public static boolean shouldIncreaseThreadPriorityToUrgentDisplay = false;

  /** Sets if the internal node should be persisted */
  public static boolean isPersistenceEnabled;

  /** Sets if SparseCommonPropsHolder should be used */
  public static boolean isSparseCommonPropsHolderIsEnabled;

  /** Sets if SparseNodeInfo should be used */
  public static boolean isSparseNodeInfoIsEnabled;

  /**
   * Controls if DisplayList wrapping should be disabled by default. Would have no effect if
   * ComponentTree explicitly set up to enable wrapping
   */
  public static boolean disableDisplayListWrapping = false;

  /** specifies if the ComparableAnimatedColorDrawable should be initialized in a lazy way */
  public static boolean lazyComparableAnimatedColorDrawable = false;

  /**
   * We want to completely remove Reference from Litho's API. This param will help us understand the
   * impact of this change in terms of memory footprint and mount performance
   */
  public static boolean dontUseReferences = false;

  // TODO T39526148 Remove once Flipper plugin is usable.
  /** If true, information about RenderInfos will be passed to Flipper's layout inspector. */
  public static boolean enableRenderInfoDebugging = false;

  public static boolean isRenderInfoDebuggingEnabled() {
    return isDebugModeEnabled && enableRenderInfoDebugging;
  }

  public static boolean isPoolBisectEnabled = false;
  public static String disablePoolsStart = "aaaaa";
  public static String disablePoolsEnd = "zzzzz";

  public static boolean prioritizeRenderingOnParallel = true;

  public static boolean useSharedFutureOnParallel = true;

  /**
   * If true, we also check if the RecyclerBinder needs remeasuring when checking if it's been
   * measured.
   */
  public static boolean checkNeedsRemeasure = false;

  /** (Hopefully) temporary measure as we're investigating a major crash in libhwui. */
  public static boolean disableComponentHostPool = true;

  public static boolean disableCommonBuilderPools = false;

  public static float defaultRangeRatio = -1;
  public static int fixedRangeSize = -1;

  public static boolean clearComponentHostPressState = false;

  // todo T40814333 clean up after running experiment.
  public static boolean splitLayoutForMeasureAndRangeEstimation = false;

  public static boolean isMountIndexBisectEnabled = false;
  public static int mountIndexBisectStart = 0;
  public static int mountIndexBisectEnd = 1000;

  public static boolean isRootComponentBisectEnabled = false;
  public static String rootComponentBisectStart = "aaaaa";
  public static String rootComponentBisectEnd = "zzzzz";
}
