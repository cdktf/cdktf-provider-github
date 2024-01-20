# `dataGithubOrganizationIpAllowList` Submodule <a name="`dataGithubOrganizationIpAllowList` Submodule" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationIpAllowList <a name="DataGithubOrganizationIpAllowList" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/organization_ip_allow_list github_organization_ip_allow_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationIpAllowList(Construct Scope, string Id, DataGithubOrganizationIpAllowListConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig">DataGithubOrganizationIpAllowListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig">DataGithubOrganizationIpAllowListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubOrganizationIpAllowList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationIpAllowList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationIpAllowList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationIpAllowList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationIpAllowList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGithubOrganizationIpAllowList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationIpAllowList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationIpAllowList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/organization_ip_allow_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationIpAllowList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.ipAllowList">IpAllowList</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList">DataGithubOrganizationIpAllowListIpAllowListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IpAllowList`<sup>Required</sup> <a name="IpAllowList" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.ipAllowList"></a>

```csharp
public DataGithubOrganizationIpAllowListIpAllowListStructList IpAllowList { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList">DataGithubOrganizationIpAllowListIpAllowListStructList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationIpAllowListConfig <a name="DataGithubOrganizationIpAllowListConfig" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationIpAllowListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/organization_ip_allow_list#id DataGithubOrganizationIpAllowList#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/organization_ip_allow_list#id DataGithubOrganizationIpAllowList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationIpAllowListIpAllowListStruct <a name="DataGithubOrganizationIpAllowListIpAllowListStruct" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationIpAllowListIpAllowListStruct {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationIpAllowListIpAllowListStructList <a name="DataGithubOrganizationIpAllowListIpAllowListStructList" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationIpAllowListIpAllowListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get"></a>

```csharp
private DataGithubOrganizationIpAllowListIpAllowListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubOrganizationIpAllowListIpAllowListStructOutputReference <a name="DataGithubOrganizationIpAllowListIpAllowListStructOutputReference" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationIpAllowListIpAllowListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.allowListValue">AllowListValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.isActive">IsActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct">DataGithubOrganizationIpAllowListIpAllowListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowListValue`<sup>Required</sup> <a name="AllowListValue" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.allowListValue"></a>

```csharp
public string AllowListValue { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.isActive"></a>

```csharp
public IResolvable IsActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.internalValue"></a>

```csharp
public DataGithubOrganizationIpAllowListIpAllowListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct">DataGithubOrganizationIpAllowListIpAllowListStruct</a>

---



