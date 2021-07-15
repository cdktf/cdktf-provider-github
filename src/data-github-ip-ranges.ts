// https://www.terraform.io/docs/providers/github/d/ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubIpRangesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/ip_ranges.html github_ip_ranges}
*/
export class DataGithubIpRanges extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/ip_ranges.html github_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGithubIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // dependabot - computed: true, optional: false, required: false
  public get dependabot() {
    return this.getListAttribute('dependabot');
  }

  // git - computed: true, optional: false, required: false
  public get git() {
    return this.getListAttribute('git');
  }

  // hooks - computed: true, optional: false, required: false
  public get hooks() {
    return this.getListAttribute('hooks');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // importer - computed: true, optional: false, required: false
  public get importer() {
    return this.getListAttribute('importer');
  }

  // pages - computed: true, optional: false, required: false
  public get pages() {
    return this.getListAttribute('pages');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
