# `data_github_actions_organization_variables`

Refer to the Terraform Registory for docs: [`data_github_actions_organization_variables`](https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_variables).

# `dataGithubActionsOrganizationVariables` Submodule <a name="`dataGithubActionsOrganizationVariables` Submodule" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsOrganizationVariables <a name="DataGithubActionsOrganizationVariables" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_variables github_actions_organization_variables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_actions_organization_variables

dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_variables#id DataGithubActionsOrganizationVariables#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_variables#id DataGithubActionsOrganizationVariables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_actions_organization_variables

dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_actions_organization_variables

dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_actions_organization_variables

dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.variables">variables</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList">DataGithubActionsOrganizationVariablesVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.variables"></a>

```python
variables: DataGithubActionsOrganizationVariablesVariablesList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList">DataGithubActionsOrganizationVariablesVariablesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsOrganizationVariablesConfig <a name="DataGithubActionsOrganizationVariablesConfig" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_actions_organization_variables

dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_variables#id DataGithubActionsOrganizationVariables#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_variables#id DataGithubActionsOrganizationVariables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubActionsOrganizationVariablesVariables <a name="DataGithubActionsOrganizationVariablesVariables" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_actions_organization_variables

dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubActionsOrganizationVariablesVariablesList <a name="DataGithubActionsOrganizationVariablesVariablesList" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_actions_organization_variables

dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubActionsOrganizationVariablesVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubActionsOrganizationVariablesVariablesOutputReference <a name="DataGithubActionsOrganizationVariablesVariablesOutputReference" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_actions_organization_variables

dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables">DataGithubActionsOrganizationVariablesVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubActionsOrganizationVariablesVariables
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables">DataGithubActionsOrganizationVariablesVariables</a>

---



