/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/ip_ranges github_ip_ranges}
*/
export class DataGithubIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_ip_ranges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGithubIpRanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGithubIpRanges to import
  * @param importFromId The id of the existing DataGithubIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGithubIpRanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_ip_ranges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/ip_ranges github_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGithubIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.42.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // actions_ipv4 - computed: true, optional: false, required: false
  public get actionsIpv4() {
    return this.getListAttribute('actions_ipv4');
  }

  // actions_ipv6 - computed: true, optional: false, required: false
  public get actionsIpv6() {
    return this.getListAttribute('actions_ipv6');
  }

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getListAttribute('api');
  }

  // api_ipv4 - computed: true, optional: false, required: false
  public get apiIpv4() {
    return this.getListAttribute('api_ipv4');
  }

  // api_ipv6 - computed: true, optional: false, required: false
  public get apiIpv6() {
    return this.getListAttribute('api_ipv6');
  }

  // dependabot - computed: true, optional: false, required: false
  public get dependabot() {
    return this.getListAttribute('dependabot');
  }

  // dependabot_ipv4 - computed: true, optional: false, required: false
  public get dependabotIpv4() {
    return this.getListAttribute('dependabot_ipv4');
  }

  // dependabot_ipv6 - computed: true, optional: false, required: false
  public get dependabotIpv6() {
    return this.getListAttribute('dependabot_ipv6');
  }

  // git - computed: true, optional: false, required: false
  public get git() {
    return this.getListAttribute('git');
  }

  // git_ipv4 - computed: true, optional: false, required: false
  public get gitIpv4() {
    return this.getListAttribute('git_ipv4');
  }

  // git_ipv6 - computed: true, optional: false, required: false
  public get gitIpv6() {
    return this.getListAttribute('git_ipv6');
  }

  // hooks - computed: true, optional: false, required: false
  public get hooks() {
    return this.getListAttribute('hooks');
  }

  // hooks_ipv4 - computed: true, optional: false, required: false
  public get hooksIpv4() {
    return this.getListAttribute('hooks_ipv4');
  }

  // hooks_ipv6 - computed: true, optional: false, required: false
  public get hooksIpv6() {
    return this.getListAttribute('hooks_ipv6');
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

  // importer - computed: true, optional: false, required: false
  public get importer() {
    return this.getListAttribute('importer');
  }

  // importer_ipv4 - computed: true, optional: false, required: false
  public get importerIpv4() {
    return this.getListAttribute('importer_ipv4');
  }

  // importer_ipv6 - computed: true, optional: false, required: false
  public get importerIpv6() {
    return this.getListAttribute('importer_ipv6');
  }

  // pages - computed: true, optional: false, required: false
  public get pages() {
    return this.getListAttribute('pages');
  }

  // pages_ipv4 - computed: true, optional: false, required: false
  public get pagesIpv4() {
    return this.getListAttribute('pages_ipv4');
  }

  // pages_ipv6 - computed: true, optional: false, required: false
  public get pagesIpv6() {
    return this.getListAttribute('pages_ipv6');
  }

  // web - computed: true, optional: false, required: false
  public get web() {
    return this.getListAttribute('web');
  }

  // web_ipv4 - computed: true, optional: false, required: false
  public get webIpv4() {
    return this.getListAttribute('web_ipv4');
  }

  // web_ipv6 - computed: true, optional: false, required: false
  public get webIpv6() {
    return this.getListAttribute('web_ipv6');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
