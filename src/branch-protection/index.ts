/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Setting this to 'true' to allow the branch to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#allows_deletions BranchProtection#allows_deletions}
  */
  readonly allowsDeletions?: boolean | cdktf.IResolvable;
  /**
  * Setting this to 'true' to allow force pushes on the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}
  */
  readonly allowsForcePushes?: boolean | cdktf.IResolvable;
  /**
  * Setting this to 'true' enforces status checks for repository administrators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#enforce_admins BranchProtection#enforce_admins}
  */
  readonly enforceAdmins?: boolean | cdktf.IResolvable;
  /**
  * The list of actor Names/IDs that are allowed to bypass force push restrictions. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#force_push_bypassers BranchProtection#force_push_bypassers}
  */
  readonly forcePushBypassers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#id BranchProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Setting this to 'true' will make the branch read-only and preventing any pushes to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#lock_branch BranchProtection#lock_branch}
  */
  readonly lockBranch?: boolean | cdktf.IResolvable;
  /**
  * Identifies the protection rule pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#pattern BranchProtection#pattern}
  */
  readonly pattern: string;
  /**
  * The name or node ID of the repository associated with this branch protection rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#repository_id BranchProtection#repository_id}
  */
  readonly repositoryId: string;
  /**
  * Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}
  */
  readonly requireConversationResolution?: boolean | cdktf.IResolvable;
  /**
  * Setting this to 'true' requires all commits to be signed with GPG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#require_signed_commits BranchProtection#require_signed_commits}
  */
  readonly requireSignedCommits?: boolean | cdktf.IResolvable;
  /**
  * Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#required_linear_history BranchProtection#required_linear_history}
  */
  readonly requiredLinearHistory?: boolean | cdktf.IResolvable;
  /**
  * required_pull_request_reviews block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}
  */
  readonly requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable;
  /**
  * required_status_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#required_status_checks BranchProtection#required_status_checks}
  */
  readonly requiredStatusChecks?: BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable;
  /**
  * restrict_pushes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#restrict_pushes BranchProtection#restrict_pushes}
  */
  readonly restrictPushes?: BranchProtectionRestrictPushes[] | cdktf.IResolvable;
}
export interface BranchProtectionRequiredPullRequestReviews {
  /**
  * Dismiss approved reviews automatically when a new commit is pushed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}
  */
  readonly dismissStaleReviews?: boolean | cdktf.IResolvable;
  /**
  * The list of actor Names/IDs with dismissal access. If not empty, 'restrict_dismissals' is ignored. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#dismissal_restrictions BranchProtection#dismissal_restrictions}
  */
  readonly dismissalRestrictions?: string[];
  /**
  * The list of actor Names/IDs that are allowed to bypass pull request requirements. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#pull_request_bypassers BranchProtection#pull_request_bypassers}
  */
  readonly pullRequestBypassers?: string[];
  /**
  * Require an approved review in pull requests including files with a designated code owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#require_code_owner_reviews BranchProtection#require_code_owner_reviews}
  */
  readonly requireCodeOwnerReviews?: boolean | cdktf.IResolvable;
  /**
  * Require that The most recent push must be approved by someone other than the last pusher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#require_last_push_approval BranchProtection#require_last_push_approval}
  */
  readonly requireLastPushApproval?: boolean | cdktf.IResolvable;
  /**
  * Require 'x' number of approvals to satisfy branch protection requirements. If this is specified it must be a number between 0-6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#required_approving_review_count BranchProtection#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
  /**
  * Restrict pull request review dismissals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#restrict_dismissals BranchProtection#restrict_dismissals}
  */
  readonly restrictDismissals?: boolean | cdktf.IResolvable;
}

export function branchProtectionRequiredPullRequestReviewsToTerraform(struct?: BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dismiss_stale_reviews: cdktf.booleanToTerraform(struct!.dismissStaleReviews),
    dismissal_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dismissalRestrictions),
    pull_request_bypassers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pullRequestBypassers),
    require_code_owner_reviews: cdktf.booleanToTerraform(struct!.requireCodeOwnerReviews),
    require_last_push_approval: cdktf.booleanToTerraform(struct!.requireLastPushApproval),
    required_approving_review_count: cdktf.numberToTerraform(struct!.requiredApprovingReviewCount),
    restrict_dismissals: cdktf.booleanToTerraform(struct!.restrictDismissals),
  }
}


export function branchProtectionRequiredPullRequestReviewsToHclTerraform(struct?: BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dismiss_stale_reviews: {
      value: cdktf.booleanToHclTerraform(struct!.dismissStaleReviews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dismissal_restrictions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dismissalRestrictions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pull_request_bypassers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pullRequestBypassers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    require_code_owner_reviews: {
      value: cdktf.booleanToHclTerraform(struct!.requireCodeOwnerReviews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_last_push_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireLastPushApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_approving_review_count: {
      value: cdktf.numberToHclTerraform(struct!.requiredApprovingReviewCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restrict_dismissals: {
      value: cdktf.booleanToHclTerraform(struct!.restrictDismissals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchProtectionRequiredPullRequestReviewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dismissStaleReviews !== undefined) {
      hasAnyValues = true;
      internalValueResult.dismissStaleReviews = this._dismissStaleReviews;
    }
    if (this._dismissalRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dismissalRestrictions = this._dismissalRestrictions;
    }
    if (this._pullRequestBypassers !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestBypassers = this._pullRequestBypassers;
    }
    if (this._requireCodeOwnerReviews !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCodeOwnerReviews = this._requireCodeOwnerReviews;
    }
    if (this._requireLastPushApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLastPushApproval = this._requireLastPushApproval;
    }
    if (this._requiredApprovingReviewCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredApprovingReviewCount = this._requiredApprovingReviewCount;
    }
    if (this._restrictDismissals !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictDismissals = this._restrictDismissals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dismissStaleReviews = undefined;
      this._dismissalRestrictions = undefined;
      this._pullRequestBypassers = undefined;
      this._requireCodeOwnerReviews = undefined;
      this._requireLastPushApproval = undefined;
      this._requiredApprovingReviewCount = undefined;
      this._restrictDismissals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dismissStaleReviews = value.dismissStaleReviews;
      this._dismissalRestrictions = value.dismissalRestrictions;
      this._pullRequestBypassers = value.pullRequestBypassers;
      this._requireCodeOwnerReviews = value.requireCodeOwnerReviews;
      this._requireLastPushApproval = value.requireLastPushApproval;
      this._requiredApprovingReviewCount = value.requiredApprovingReviewCount;
      this._restrictDismissals = value.restrictDismissals;
    }
  }

  // dismiss_stale_reviews - computed: false, optional: true, required: false
  private _dismissStaleReviews?: boolean | cdktf.IResolvable; 
  public get dismissStaleReviews() {
    return this.getBooleanAttribute('dismiss_stale_reviews');
  }
  public set dismissStaleReviews(value: boolean | cdktf.IResolvable) {
    this._dismissStaleReviews = value;
  }
  public resetDismissStaleReviews() {
    this._dismissStaleReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissStaleReviewsInput() {
    return this._dismissStaleReviews;
  }

  // dismissal_restrictions - computed: false, optional: true, required: false
  private _dismissalRestrictions?: string[]; 
  public get dismissalRestrictions() {
    return cdktf.Fn.tolist(this.getListAttribute('dismissal_restrictions'));
  }
  public set dismissalRestrictions(value: string[]) {
    this._dismissalRestrictions = value;
  }
  public resetDismissalRestrictions() {
    this._dismissalRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissalRestrictionsInput() {
    return this._dismissalRestrictions;
  }

  // pull_request_bypassers - computed: false, optional: true, required: false
  private _pullRequestBypassers?: string[]; 
  public get pullRequestBypassers() {
    return cdktf.Fn.tolist(this.getListAttribute('pull_request_bypassers'));
  }
  public set pullRequestBypassers(value: string[]) {
    this._pullRequestBypassers = value;
  }
  public resetPullRequestBypassers() {
    this._pullRequestBypassers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestBypassersInput() {
    return this._pullRequestBypassers;
  }

  // require_code_owner_reviews - computed: false, optional: true, required: false
  private _requireCodeOwnerReviews?: boolean | cdktf.IResolvable; 
  public get requireCodeOwnerReviews() {
    return this.getBooleanAttribute('require_code_owner_reviews');
  }
  public set requireCodeOwnerReviews(value: boolean | cdktf.IResolvable) {
    this._requireCodeOwnerReviews = value;
  }
  public resetRequireCodeOwnerReviews() {
    this._requireCodeOwnerReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCodeOwnerReviewsInput() {
    return this._requireCodeOwnerReviews;
  }

  // require_last_push_approval - computed: false, optional: true, required: false
  private _requireLastPushApproval?: boolean | cdktf.IResolvable; 
  public get requireLastPushApproval() {
    return this.getBooleanAttribute('require_last_push_approval');
  }
  public set requireLastPushApproval(value: boolean | cdktf.IResolvable) {
    this._requireLastPushApproval = value;
  }
  public resetRequireLastPushApproval() {
    this._requireLastPushApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLastPushApprovalInput() {
    return this._requireLastPushApproval;
  }

  // required_approving_review_count - computed: false, optional: true, required: false
  private _requiredApprovingReviewCount?: number; 
  public get requiredApprovingReviewCount() {
    return this.getNumberAttribute('required_approving_review_count');
  }
  public set requiredApprovingReviewCount(value: number) {
    this._requiredApprovingReviewCount = value;
  }
  public resetRequiredApprovingReviewCount() {
    this._requiredApprovingReviewCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovingReviewCountInput() {
    return this._requiredApprovingReviewCount;
  }

  // restrict_dismissals - computed: false, optional: true, required: false
  private _restrictDismissals?: boolean | cdktf.IResolvable; 
  public get restrictDismissals() {
    return this.getBooleanAttribute('restrict_dismissals');
  }
  public set restrictDismissals(value: boolean | cdktf.IResolvable) {
    this._restrictDismissals = value;
  }
  public resetRestrictDismissals() {
    this._restrictDismissals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDismissalsInput() {
    return this._restrictDismissals;
  }
}

export class BranchProtectionRequiredPullRequestReviewsList extends cdktf.ComplexList {
  public internalValue? : BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BranchProtectionRequiredPullRequestReviewsOutputReference {
    return new BranchProtectionRequiredPullRequestReviewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchProtectionRequiredStatusChecks {
  /**
  * The list of status checks to require in order to merge into this branch. No status checks are required by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#contexts BranchProtection#contexts}
  */
  readonly contexts?: string[];
  /**
  * Require branches to be up to date before merging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#strict BranchProtection#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

export function branchProtectionRequiredStatusChecksToTerraform(struct?: BranchProtectionRequiredStatusChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contexts),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}


export function branchProtectionRequiredStatusChecksToHclTerraform(struct?: BranchProtectionRequiredStatusChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contexts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contexts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    strict: {
      value: cdktf.booleanToHclTerraform(struct!.strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchProtectionRequiredStatusChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BranchProtectionRequiredStatusChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.contexts = this._contexts;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchProtectionRequiredStatusChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contexts = undefined;
      this._strict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contexts = value.contexts;
      this._strict = value.strict;
    }
  }

  // contexts - computed: false, optional: true, required: false
  private _contexts?: string[]; 
  public get contexts() {
    return cdktf.Fn.tolist(this.getListAttribute('contexts'));
  }
  public set contexts(value: string[]) {
    this._contexts = value;
  }
  public resetContexts() {
    this._contexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextsInput() {
    return this._contexts;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }
}

export class BranchProtectionRequiredStatusChecksList extends cdktf.ComplexList {
  public internalValue? : BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BranchProtectionRequiredStatusChecksOutputReference {
    return new BranchProtectionRequiredStatusChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchProtectionRestrictPushes {
  /**
  * Restrict pushes that create matching branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#blocks_creations BranchProtection#blocks_creations}
  */
  readonly blocksCreations?: boolean | cdktf.IResolvable;
  /**
  * The list of actor Names/IDs that may push to the branch. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#push_allowances BranchProtection#push_allowances}
  */
  readonly pushAllowances?: string[];
}

export function branchProtectionRestrictPushesToTerraform(struct?: BranchProtectionRestrictPushes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks_creations: cdktf.booleanToTerraform(struct!.blocksCreations),
    push_allowances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pushAllowances),
  }
}


export function branchProtectionRestrictPushesToHclTerraform(struct?: BranchProtectionRestrictPushes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks_creations: {
      value: cdktf.booleanToHclTerraform(struct!.blocksCreations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    push_allowances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pushAllowances),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchProtectionRestrictPushesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BranchProtectionRestrictPushes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocksCreations !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocksCreations = this._blocksCreations;
    }
    if (this._pushAllowances !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushAllowances = this._pushAllowances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchProtectionRestrictPushes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocksCreations = undefined;
      this._pushAllowances = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocksCreations = value.blocksCreations;
      this._pushAllowances = value.pushAllowances;
    }
  }

  // blocks_creations - computed: false, optional: true, required: false
  private _blocksCreations?: boolean | cdktf.IResolvable; 
  public get blocksCreations() {
    return this.getBooleanAttribute('blocks_creations');
  }
  public set blocksCreations(value: boolean | cdktf.IResolvable) {
    this._blocksCreations = value;
  }
  public resetBlocksCreations() {
    this._blocksCreations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksCreationsInput() {
    return this._blocksCreations;
  }

  // push_allowances - computed: false, optional: true, required: false
  private _pushAllowances?: string[]; 
  public get pushAllowances() {
    return cdktf.Fn.tolist(this.getListAttribute('push_allowances'));
  }
  public set pushAllowances(value: string[]) {
    this._pushAllowances = value;
  }
  public resetPushAllowances() {
    this._pushAllowances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushAllowancesInput() {
    return this._pushAllowances;
  }
}

export class BranchProtectionRestrictPushesList extends cdktf.ComplexList {
  public internalValue? : BranchProtectionRestrictPushes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BranchProtectionRestrictPushesOutputReference {
    return new BranchProtectionRestrictPushesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection github_branch_protection}
*/
export class BranchProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_branch_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BranchProtection to import
  * @param importFromId The id of the existing BranchProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BranchProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/branch_protection github_branch_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: BranchProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch_protection',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.6.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowsDeletions = config.allowsDeletions;
    this._allowsForcePushes = config.allowsForcePushes;
    this._enforceAdmins = config.enforceAdmins;
    this._forcePushBypassers = config.forcePushBypassers;
    this._id = config.id;
    this._lockBranch = config.lockBranch;
    this._pattern = config.pattern;
    this._repositoryId = config.repositoryId;
    this._requireConversationResolution = config.requireConversationResolution;
    this._requireSignedCommits = config.requireSignedCommits;
    this._requiredLinearHistory = config.requiredLinearHistory;
    this._requiredPullRequestReviews.internalValue = config.requiredPullRequestReviews;
    this._requiredStatusChecks.internalValue = config.requiredStatusChecks;
    this._restrictPushes.internalValue = config.restrictPushes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allows_deletions - computed: false, optional: true, required: false
  private _allowsDeletions?: boolean | cdktf.IResolvable; 
  public get allowsDeletions() {
    return this.getBooleanAttribute('allows_deletions');
  }
  public set allowsDeletions(value: boolean | cdktf.IResolvable) {
    this._allowsDeletions = value;
  }
  public resetAllowsDeletions() {
    this._allowsDeletions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowsDeletionsInput() {
    return this._allowsDeletions;
  }

  // allows_force_pushes - computed: false, optional: true, required: false
  private _allowsForcePushes?: boolean | cdktf.IResolvable; 
  public get allowsForcePushes() {
    return this.getBooleanAttribute('allows_force_pushes');
  }
  public set allowsForcePushes(value: boolean | cdktf.IResolvable) {
    this._allowsForcePushes = value;
  }
  public resetAllowsForcePushes() {
    this._allowsForcePushes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowsForcePushesInput() {
    return this._allowsForcePushes;
  }

  // enforce_admins - computed: false, optional: true, required: false
  private _enforceAdmins?: boolean | cdktf.IResolvable; 
  public get enforceAdmins() {
    return this.getBooleanAttribute('enforce_admins');
  }
  public set enforceAdmins(value: boolean | cdktf.IResolvable) {
    this._enforceAdmins = value;
  }
  public resetEnforceAdmins() {
    this._enforceAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAdminsInput() {
    return this._enforceAdmins;
  }

  // force_push_bypassers - computed: false, optional: true, required: false
  private _forcePushBypassers?: string[]; 
  public get forcePushBypassers() {
    return cdktf.Fn.tolist(this.getListAttribute('force_push_bypassers'));
  }
  public set forcePushBypassers(value: string[]) {
    this._forcePushBypassers = value;
  }
  public resetForcePushBypassers() {
    this._forcePushBypassers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePushBypassersInput() {
    return this._forcePushBypassers;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lock_branch - computed: false, optional: true, required: false
  private _lockBranch?: boolean | cdktf.IResolvable; 
  public get lockBranch() {
    return this.getBooleanAttribute('lock_branch');
  }
  public set lockBranch(value: boolean | cdktf.IResolvable) {
    this._lockBranch = value;
  }
  public resetLockBranch() {
    this._lockBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockBranchInput() {
    return this._lockBranch;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // require_conversation_resolution - computed: false, optional: true, required: false
  private _requireConversationResolution?: boolean | cdktf.IResolvable; 
  public get requireConversationResolution() {
    return this.getBooleanAttribute('require_conversation_resolution');
  }
  public set requireConversationResolution(value: boolean | cdktf.IResolvable) {
    this._requireConversationResolution = value;
  }
  public resetRequireConversationResolution() {
    this._requireConversationResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireConversationResolutionInput() {
    return this._requireConversationResolution;
  }

  // require_signed_commits - computed: false, optional: true, required: false
  private _requireSignedCommits?: boolean | cdktf.IResolvable; 
  public get requireSignedCommits() {
    return this.getBooleanAttribute('require_signed_commits');
  }
  public set requireSignedCommits(value: boolean | cdktf.IResolvable) {
    this._requireSignedCommits = value;
  }
  public resetRequireSignedCommits() {
    this._requireSignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedCommitsInput() {
    return this._requireSignedCommits;
  }

  // required_linear_history - computed: false, optional: true, required: false
  private _requiredLinearHistory?: boolean | cdktf.IResolvable; 
  public get requiredLinearHistory() {
    return this.getBooleanAttribute('required_linear_history');
  }
  public set requiredLinearHistory(value: boolean | cdktf.IResolvable) {
    this._requiredLinearHistory = value;
  }
  public resetRequiredLinearHistory() {
    this._requiredLinearHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredLinearHistoryInput() {
    return this._requiredLinearHistory;
  }

  // required_pull_request_reviews - computed: false, optional: true, required: false
  private _requiredPullRequestReviews = new BranchProtectionRequiredPullRequestReviewsList(this, "required_pull_request_reviews", false);
  public get requiredPullRequestReviews() {
    return this._requiredPullRequestReviews;
  }
  public putRequiredPullRequestReviews(value: BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable) {
    this._requiredPullRequestReviews.internalValue = value;
  }
  public resetRequiredPullRequestReviews() {
    this._requiredPullRequestReviews.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPullRequestReviewsInput() {
    return this._requiredPullRequestReviews.internalValue;
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks = new BranchProtectionRequiredStatusChecksList(this, "required_status_checks", false);
  public get requiredStatusChecks() {
    return this._requiredStatusChecks;
  }
  public putRequiredStatusChecks(value: BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable) {
    this._requiredStatusChecks.internalValue = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks.internalValue;
  }

  // restrict_pushes - computed: false, optional: true, required: false
  private _restrictPushes = new BranchProtectionRestrictPushesList(this, "restrict_pushes", false);
  public get restrictPushes() {
    return this._restrictPushes;
  }
  public putRestrictPushes(value: BranchProtectionRestrictPushes[] | cdktf.IResolvable) {
    this._restrictPushes.internalValue = value;
  }
  public resetRestrictPushes() {
    this._restrictPushes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPushesInput() {
    return this._restrictPushes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allows_deletions: cdktf.booleanToTerraform(this._allowsDeletions),
      allows_force_pushes: cdktf.booleanToTerraform(this._allowsForcePushes),
      enforce_admins: cdktf.booleanToTerraform(this._enforceAdmins),
      force_push_bypassers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forcePushBypassers),
      id: cdktf.stringToTerraform(this._id),
      lock_branch: cdktf.booleanToTerraform(this._lockBranch),
      pattern: cdktf.stringToTerraform(this._pattern),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      require_conversation_resolution: cdktf.booleanToTerraform(this._requireConversationResolution),
      require_signed_commits: cdktf.booleanToTerraform(this._requireSignedCommits),
      required_linear_history: cdktf.booleanToTerraform(this._requiredLinearHistory),
      required_pull_request_reviews: cdktf.listMapper(branchProtectionRequiredPullRequestReviewsToTerraform, true)(this._requiredPullRequestReviews.internalValue),
      required_status_checks: cdktf.listMapper(branchProtectionRequiredStatusChecksToTerraform, true)(this._requiredStatusChecks.internalValue),
      restrict_pushes: cdktf.listMapper(branchProtectionRestrictPushesToTerraform, true)(this._restrictPushes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allows_deletions: {
        value: cdktf.booleanToHclTerraform(this._allowsDeletions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allows_force_pushes: {
        value: cdktf.booleanToHclTerraform(this._allowsForcePushes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_admins: {
        value: cdktf.booleanToHclTerraform(this._enforceAdmins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_push_bypassers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forcePushBypassers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_branch: {
        value: cdktf.booleanToHclTerraform(this._lockBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_conversation_resolution: {
        value: cdktf.booleanToHclTerraform(this._requireConversationResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_signed_commits: {
        value: cdktf.booleanToHclTerraform(this._requireSignedCommits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required_linear_history: {
        value: cdktf.booleanToHclTerraform(this._requiredLinearHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required_pull_request_reviews: {
        value: cdktf.listMapperHcl(branchProtectionRequiredPullRequestReviewsToHclTerraform, true)(this._requiredPullRequestReviews.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchProtectionRequiredPullRequestReviewsList",
      },
      required_status_checks: {
        value: cdktf.listMapperHcl(branchProtectionRequiredStatusChecksToHclTerraform, true)(this._requiredStatusChecks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchProtectionRequiredStatusChecksList",
      },
      restrict_pushes: {
        value: cdktf.listMapperHcl(branchProtectionRestrictPushesToHclTerraform, true)(this._restrictPushes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchProtectionRestrictPushesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
