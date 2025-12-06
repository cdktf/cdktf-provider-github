/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseSecurityAnalysisSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether GitHub Advanced Security is automatically enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#advanced_security_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#advanced_security_enabled_for_new_repositories}
  */
  readonly advancedSecurityEnabledForNewRepositories?: boolean | cdktf.IResolvable;
  /**
  * The slug of the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#enterprise_slug EnterpriseSecurityAnalysisSettings#enterprise_slug}
  */
  readonly enterpriseSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#id EnterpriseSecurityAnalysisSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether secret scanning is automatically enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_enabled_for_new_repositories}
  */
  readonly secretScanningEnabledForNewRepositories?: boolean | cdktf.IResolvable;
  /**
  * Custom URL for secret scanning push protection bypass instructions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_custom_link EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_custom_link}
  */
  readonly secretScanningPushProtectionCustomLink?: string;
  /**
  * Whether secret scanning push protection is automatically enabled for new repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_enabled_for_new_repositories}
  */
  readonly secretScanningPushProtectionEnabledForNewRepositories?: boolean | cdktf.IResolvable;
  /**
  * Whether secret scanning validity checks are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_validity_checks_enabled EnterpriseSecurityAnalysisSettings#secret_scanning_validity_checks_enabled}
  */
  readonly secretScanningValidityChecksEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings}
*/
export class EnterpriseSecurityAnalysisSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_enterprise_security_analysis_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseSecurityAnalysisSettings to import
  * @param importFromId The id of the existing EnterpriseSecurityAnalysisSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseSecurityAnalysisSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_security_analysis_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseSecurityAnalysisSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseSecurityAnalysisSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_enterprise_security_analysis_settings',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.9.0',
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
    this._advancedSecurityEnabledForNewRepositories = config.advancedSecurityEnabledForNewRepositories;
    this._enterpriseSlug = config.enterpriseSlug;
    this._id = config.id;
    this._secretScanningEnabledForNewRepositories = config.secretScanningEnabledForNewRepositories;
    this._secretScanningPushProtectionCustomLink = config.secretScanningPushProtectionCustomLink;
    this._secretScanningPushProtectionEnabledForNewRepositories = config.secretScanningPushProtectionEnabledForNewRepositories;
    this._secretScanningValidityChecksEnabled = config.secretScanningValidityChecksEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_security_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _advancedSecurityEnabledForNewRepositories?: boolean | cdktf.IResolvable; 
  public get advancedSecurityEnabledForNewRepositories() {
    return this.getBooleanAttribute('advanced_security_enabled_for_new_repositories');
  }
  public set advancedSecurityEnabledForNewRepositories(value: boolean | cdktf.IResolvable) {
    this._advancedSecurityEnabledForNewRepositories = value;
  }
  public resetAdvancedSecurityEnabledForNewRepositories() {
    this._advancedSecurityEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityEnabledForNewRepositoriesInput() {
    return this._advancedSecurityEnabledForNewRepositories;
  }

  // enterprise_slug - computed: false, optional: false, required: true
  private _enterpriseSlug?: string; 
  public get enterpriseSlug() {
    return this.getStringAttribute('enterprise_slug');
  }
  public set enterpriseSlug(value: string) {
    this._enterpriseSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSlugInput() {
    return this._enterpriseSlug;
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

  // secret_scanning_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _secretScanningEnabledForNewRepositories?: boolean | cdktf.IResolvable; 
  public get secretScanningEnabledForNewRepositories() {
    return this.getBooleanAttribute('secret_scanning_enabled_for_new_repositories');
  }
  public set secretScanningEnabledForNewRepositories(value: boolean | cdktf.IResolvable) {
    this._secretScanningEnabledForNewRepositories = value;
  }
  public resetSecretScanningEnabledForNewRepositories() {
    this._secretScanningEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScanningEnabledForNewRepositoriesInput() {
    return this._secretScanningEnabledForNewRepositories;
  }

  // secret_scanning_push_protection_custom_link - computed: false, optional: true, required: false
  private _secretScanningPushProtectionCustomLink?: string; 
  public get secretScanningPushProtectionCustomLink() {
    return this.getStringAttribute('secret_scanning_push_protection_custom_link');
  }
  public set secretScanningPushProtectionCustomLink(value: string) {
    this._secretScanningPushProtectionCustomLink = value;
  }
  public resetSecretScanningPushProtectionCustomLink() {
    this._secretScanningPushProtectionCustomLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScanningPushProtectionCustomLinkInput() {
    return this._secretScanningPushProtectionCustomLink;
  }

  // secret_scanning_push_protection_enabled_for_new_repositories - computed: false, optional: true, required: false
  private _secretScanningPushProtectionEnabledForNewRepositories?: boolean | cdktf.IResolvable; 
  public get secretScanningPushProtectionEnabledForNewRepositories() {
    return this.getBooleanAttribute('secret_scanning_push_protection_enabled_for_new_repositories');
  }
  public set secretScanningPushProtectionEnabledForNewRepositories(value: boolean | cdktf.IResolvable) {
    this._secretScanningPushProtectionEnabledForNewRepositories = value;
  }
  public resetSecretScanningPushProtectionEnabledForNewRepositories() {
    this._secretScanningPushProtectionEnabledForNewRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScanningPushProtectionEnabledForNewRepositoriesInput() {
    return this._secretScanningPushProtectionEnabledForNewRepositories;
  }

  // secret_scanning_validity_checks_enabled - computed: false, optional: true, required: false
  private _secretScanningValidityChecksEnabled?: boolean | cdktf.IResolvable; 
  public get secretScanningValidityChecksEnabled() {
    return this.getBooleanAttribute('secret_scanning_validity_checks_enabled');
  }
  public set secretScanningValidityChecksEnabled(value: boolean | cdktf.IResolvable) {
    this._secretScanningValidityChecksEnabled = value;
  }
  public resetSecretScanningValidityChecksEnabled() {
    this._secretScanningValidityChecksEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretScanningValidityChecksEnabledInput() {
    return this._secretScanningValidityChecksEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_security_enabled_for_new_repositories: cdktf.booleanToTerraform(this._advancedSecurityEnabledForNewRepositories),
      enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
      id: cdktf.stringToTerraform(this._id),
      secret_scanning_enabled_for_new_repositories: cdktf.booleanToTerraform(this._secretScanningEnabledForNewRepositories),
      secret_scanning_push_protection_custom_link: cdktf.stringToTerraform(this._secretScanningPushProtectionCustomLink),
      secret_scanning_push_protection_enabled_for_new_repositories: cdktf.booleanToTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
      secret_scanning_validity_checks_enabled: cdktf.booleanToTerraform(this._secretScanningValidityChecksEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_security_enabled_for_new_repositories: {
        value: cdktf.booleanToHclTerraform(this._advancedSecurityEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enterprise_slug: {
        value: cdktf.stringToHclTerraform(this._enterpriseSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_scanning_enabled_for_new_repositories: {
        value: cdktf.booleanToHclTerraform(this._secretScanningEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_scanning_push_protection_custom_link: {
        value: cdktf.stringToHclTerraform(this._secretScanningPushProtectionCustomLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_scanning_push_protection_enabled_for_new_repositories: {
        value: cdktf.booleanToHclTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_scanning_validity_checks_enabled: {
        value: cdktf.booleanToHclTerraform(this._secretScanningValidityChecksEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
